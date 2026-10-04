// Throwaway chart shell. Fixed initialization is the first date of this captured series.
const ResearchChart = (() => {
  const colors = {5:'#d98a00',10:'#ef5b2a',20:'#536dfe',30:'#ab47bc',60:'#007b94',120:'#795548'};
  const red='#bf3232', green='#167544';
  const finite=v=>typeof v==='number'&&Number.isFinite(v);
  const fmt=(v,n=2)=>finite(v)?v.toFixed(n):'--';
  const small=(v,unit)=>!finite(v)||v<0?'--':(v>0&&v<.01?'<0.01':v.toFixed(2))+unit;
  const preferences={mode:'volume',ma:[5,10,20],cross:false};
  function calculate(bars) {
    const out=bars.map(b=>({...b,ma:{},bb:{},dif:null,dea:null,macd:null,rsi:{}}));
    for(let i=0;i<out.length;i++){
      for(const n of Object.keys(colors).map(Number)){
        const w=bars.slice(i-n+1,i+1);
        out[i].ma[n]=i>=n-1&&w.every(b=>finite(b.close))?w.reduce((s,b)=>s+b.close,0)/n:null;
      }
      const mid=out[i].ma[20];
      if(finite(mid)){const sd=Math.sqrt(bars.slice(i-19,i+1).reduce((s,b)=>s+(b.close-mid)**2,0)/20);out[i].bb={mid,upper:mid+2*sd,lower:mid-2*sd};}
    }
    let fast=null,slow=null,dea=null,gap=false;const difs=[];
    const gains={},losses={};
    for(let i=0;i<out.length;i++){
      if(!finite(out[i].close)){gap=true;continue;}
      if(gap)continue; // An unknown gap cannot be re-seeded as a valid recursive series.
      if(i===11)fast=out.slice(0,12).reduce((s,b)=>s+b.close,0)/12;
      else if(i>11)fast=2/13*out[i].close+11/13*fast;
      if(i===25)slow=out.slice(0,26).reduce((s,b)=>s+b.close,0)/26;
      else if(i>25)slow=2/27*out[i].close+25/27*slow;
      if(finite(fast)&&finite(slow)){out[i].dif=fast-slow;difs.push(out[i].dif);}
      if(difs.length===9)dea=difs.reduce((s,v)=>s+v,0)/9;
      else if(difs.length>9)dea=.2*out[i].dif+.8*dea;
      if(finite(dea)){out[i].dea=dea;out[i].macd=2*(out[i].dif-dea);}
      for(const n of [6,14,24]){
        if(i===n){const ds=out.slice(1,n+1).map((b,j)=>b.close-out[j].close);gains[n]=ds.reduce((s,d)=>s+Math.max(d,0),0)/n;losses[n]=ds.reduce((s,d)=>s+Math.max(-d,0),0)/n;}
        else if(i>n){const d=out[i].close-out[i-1].close;gains[n]=(gains[n]*(n-1)+Math.max(d,0))/n;losses[n]=(losses[n]*(n-1)+Math.max(-d,0))/n;}
        if(i>=n)out[i].rsi[n]=losses[n]===0?(gains[n]===0?50:100):100-100/(1+gains[n]/losses[n]);
      }
    }
    return out;
  }
  function mount(root, layer, calendar) {
    if(!layer.bars.length){root.innerHTML='<p class="empty">该时点没有可用行情；保留未知或更换研究时点。</p>';return;}
    const map=new Map(layer.bars.map(b=>[b.trade_date,b]));
    const first=layer.bars[0].trade_date;
    const dates=calendar.filter(d=>d>=first&&d<=layer.as_of_date);
    const all=calculate((dates.length?dates:layer.bars.map(b=>b.trade_date)).map(d=>map.get(d)||{trade_date:d,close:null}));
    const last=all.at(-1), end=last.trade_date;
    const anchor=new Date(end+'T00:00:00Z');const day=anchor.getUTCDate();anchor.setUTCDate(1);anchor.setUTCMonth(anchor.getUTCMonth()-4);const maxDay=new Date(Date.UTC(anchor.getUTCFullYear(),anchor.getUTCMonth()+1,0)).getUTCDate();anchor.setUTCDate(Math.min(day,maxDay));
    let startDate=anchor.toISOString().slice(0,10), endDate=end, hovered=null, hidden=false;
    const escape=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    root.innerHTML=`<div class="chart-toolbar"><span class="fine muted">日线 · ${escape(layer.price_basis||'真实历史快照')}</span><details><summary>MA 设置</summary><div class="chart-ma">${Object.keys(colors).map(n=>`<label class="check" style="color:${colors[n]}"><input type="checkbox" data-ma="${n}" ${preferences.ma.includes(+n)?'checked':''}>MA${n}</label>`).join('')}</div></details><label class="check fine"><input type="checkbox" id="cross-setting" ${preferences.cross?'checked':''}>金叉 / 死叉</label></div><div class="chart-toolbar"><label class="visually-hidden" for="chart-start">图表开始日期</label><input type="date" id="chart-start" value="${startDate<first?first:startDate}" min="${first}" max="${end}"><span>至</span><label class="visually-hidden" for="chart-end">图表结束日期</label><input type="date" id="chart-end" value="${end}" min="${first}" max="${end}"><button class="small" data-range="apply">查看范围</button><button class="small" data-range="reset">重置范围</button><button class="small" data-range="older">向前</button><button class="small" data-range="newer">向后</button></div><p class="fine muted" id="chart-range-note">仅显示研究日及此前；可浏览的样本边界为 ${first} 至 ${end}。</p><div class="chart-box"><div class="chart-legend" id="main-legend"></div><svg id="main-chart" role="img" aria-label="${escape(layer.name)}历史日线与价格指标"></svg><div class="tooltip" id="chart-tooltip"></div><div class="chart-legend chart-sub-legend" id="sub-legend"></div><svg id="sub-chart" role="img" aria-label="历史技术指标副图"></svg></div><div class="chart-modes">${[['volume','成交量'],['boll','BOLL'],['macd','MACD'],['rsi','RSI']].map(([key,label])=>`<button type="button" class="small ${preferences.mode===key?'selected':''}" data-mode="${key}" aria-pressed="${preferences.mode===key}">${label}</button>`).join('')}</div><p class="fine muted footnote">图表初始化锚点固定为 ${first}；图例与行情明细联动。回放末价是研究时点可知价格；不使用今日报价。缺失昨收、成交额或历史流通股本显示 --。</p>`;
    root.querySelector('.chart-toolbar > span').textContent='日线 · '+(layer.price_basis==='unadjusted'?'不复权试验输入':layer.price_basis==='index_points'?'指数点位':'真实历史快照');
    const main=root.querySelector('#main-chart'),sub=root.querySelector('#sub-chart'),tooltip=root.querySelector('#chart-tooltip');
    let visible,geometry;
    function path(vals,x,y){let s='',fresh=true;vals.forEach((v,i)=>{if(!finite(v)){fresh=true;return;}s+=(fresh?'M':'L')+x(i).toFixed(2)+','+y(v).toFixed(2)+' ';fresh=false;});return s;}
    const line=(vals,color,x,y,dash='')=>`<path d="${path(vals,x,y)}" fill="none" stroke="${color}" stroke-width="1.4" ${dash?'stroke-dasharray="'+dash+'"':''}/>`;
    const text=(x,y,s,anchor='start',color='#52666e')=>`<text x="${x}" y="${y}" text-anchor="${anchor}" fill="${color}" font-size="11" font-family="sans-serif">${escape(s)}</text>`;
    function legends(bar){
      root.querySelector('#main-legend').innerHTML=preferences.mode==='boll'?`<span>BB 20 2</span>${[['中轨','mid'],['上轨','upper'],['下轨','lower']].map(([label,key],i)=>`<span style="color:${[colors[5],colors[10],colors[20]][i]}">${label} ${fmt(bar.bb[key])}</span>`).join('')}`:preferences.ma.map(n=>`<span style="color:${colors[n]}">MA${n} ${fmt(bar.ma[n])}</span>`).join('');
      root.querySelector('#sub-legend').innerHTML=preferences.mode==='macd'?`<span>MACD (12,26,9)</span><span style="color:${colors[5]}">DIF ${fmt(bar.dif,3)}</span><span style="color:${colors[10]}">DEA ${fmt(bar.dea,3)}</span><span style="color:${colors[20]}">MACD ${fmt(bar.macd,3)}</span>`:preferences.mode==='rsi'?`<span>RSI (6,14,24)</span>${[6,14,24].map((n,i)=>`<span style="color:${[colors[5],colors[10],colors[20]][i]}">RSI${i+1} ${fmt(bar.rsi[n],3)}</span>`).join('')}`:`<span>成交量 ${small(finite(bar.volume)?bar.volume/10000:null,'万手')}</span>`;
    }
    function tip(bar){
      const prev=finite(bar.prev_close)&&bar.prev_close>0?bar.prev_close:null;
      const change=finite(prev)&&finite(bar.close)?bar.close-prev:null;
      const signed=(v,p=false)=>!finite(v)?'--':(v>0?'+':v<0?'-':'')+Math.abs(p?v*100:v).toFixed(2)+(p?'%':'');
      const color=v=>!finite(v)||!finite(prev)||v===prev?'#1b3038':v>prev?red:green;
      const rows=[['时间',bar.trade_date,'#66777d'],['昨收',fmt(prev),'#1b3038'],['开盘',fmt(bar.open),color(bar.open)],['收盘',fmt(bar.close),color(bar.close)],['最高',fmt(bar.high),color(bar.high)],['最低',fmt(bar.low),color(bar.low)],['涨跌额',signed(change),!finite(change)||change===0?'#1b3038':change>0?red:green],['涨跌幅',signed(finite(change)?change/prev:null,true),!finite(change)||change===0?'#1b3038':change>0?red:green],['成交量',small(finite(bar.volume)?bar.volume/10000:null,'万手'),'#1b3038'],['成交额',small(finite(bar.amount)?bar.amount/1e8:null,'亿'),'#1b3038'],['换手率',finite(bar.turnover_rate)&&bar.turnover_rate>=0?fmt(bar.turnover_rate*100)+'%':'--','#1b3038']];
      tooltip.innerHTML='<dl>'+rows.map(([k,v,c])=>`<dt>${k}</dt><dd style="color:${c}">${escape(v)}</dd>`).join('')+'</dl>';
    }
    function draw(){
      visible=all.filter(b=>b.trade_date>=startDate&&b.trade_date<=endDate);
      if(!visible.length){root.querySelector('#chart-range-note').textContent='所选范围没有行情，请重新选择。';geometry=null;tooltip.hidden=true;main.innerHTML='<text x="14" y="60" fill="#566970">该日期范围没有行情，请重选范围。</text>';sub.innerHTML='';root.querySelector('#main-legend').textContent='指标 --';root.querySelector('#sub-legend').textContent='指标 --';return;}
      const w=Math.max(300,root.clientWidth),left=14,right=w<420?62:72,plotW=w-left-right,top=18,bottom=260,subTop=10,subBottom=116;
      const x=i=>left+plotW*(i+.5)/visible.length;
      const vals=visible.flatMap(b=>[b.low??b.close,b.high??b.close,...(preferences.mode==='boll'?Object.values(b.bb):preferences.ma.map(n=>b.ma[n]))]).filter(finite);
      if(!vals.length){main.innerHTML=text(14,60,'该范围价格缺失');sub.innerHTML='';return;}
      const low=Math.min(...vals),high=Math.max(...vals),pad=(high-low||high*.01)*.08,lo=low-pad,hi=high+pad,y=v=>bottom-(v-lo)/(hi-lo)*(bottom-top);
      let m='';for(let i=0;i<4;i++){const v=lo+(hi-lo)*i/3; m+=`<line x1="${left}" y1="${y(v)}" x2="${w-right}" y2="${y(v)}" stroke="#e8eeee"/>`+text(w-right+6,y(v)+4,fmt(v));}
      const candleW=Math.max(.8,Math.min(10,plotW/visible.length*.65));
      visible.forEach((b,i)=>{if(![b.open,b.high,b.low,b.close].every(finite))return;const c=b.close>=b.open?red:green; m+=`<line x1="${x(i)}" y1="${y(b.high)}" x2="${x(i)}" y2="${y(b.low)}" stroke="${c}"/><rect x="${x(i)-candleW/2}" y="${Math.min(y(b.open),y(b.close))}" width="${candleW}" height="${Math.max(1,Math.abs(y(b.open)-y(b.close)))}" fill="${c}"/>`;});
      if(visible.some(b=>!finite(b.open)))m+=line(visible.map(b=>b.close),'#566970',x,y);
      if(preferences.mode==='boll'){
        let run=[];const fillBand=()=>{if(run.length>1){const topPath=run.map(i=>`${x(i)},${y(visible[i].bb.upper)}`).join(' '),bottomPath=[...run].reverse().map(i=>`${x(i)},${y(visible[i].bb.lower)}`).join(' ');m+=`<polygon points="${topPath} ${bottomPath}" fill="#536dfe" fill-opacity="0.08"/>`;}run=[];};
        visible.forEach((b,i)=>{if(finite(b.bb.upper))run.push(i);else fillBand();});fillBand();
        m+=['mid','upper','lower'].map((key,i)=>line(visible.map(b=>b.bb[key]),[colors[5],colors[10],colors[20]][i],x,y)).join('');
      }
      else m+=preferences.ma.map(n=>line(visible.map(b=>b.ma[n]),colors[n],x,y)).join('');
      const good=visible.filter(b=>finite(b.high)&&finite(b.low));
      if(good.length){const max=good.reduce((a,b)=>a.high>=b.high?a:b),min=good.reduce((a,b)=>a.low<=b.low?a:b);for(const [b,key,dy] of [[max,'high',-7],[min,'low',15]]){const i=visible.indexOf(b);m+=text(Math.max(45,Math.min(w-right-40,x(i))),Math.max(12,Math.min(275,y(b[key])+dy)),fmt(b[key]),'middle','#314c55');}}
      if(finite(last.close)){if(last.close>=lo&&last.close<=hi)m+=`<line x1="${left}" y1="${y(last.close)}" x2="${w-right}" y2="${y(last.close)}" stroke="#698989" stroke-dasharray="4 4"/>`;m+=text(w-right+6,Math.max(12,Math.min(270,y(last.close))),fmt(last.close),'start','#12615d');}
      if(preferences.cross){
        const signals=new Map();
        for(let a=0;a<preferences.ma.length;a++)for(let b=a+1;b<preferences.ma.length;b++){
          const p=preferences.ma[a],q=preferences.ma[b];let dir=0;
          for(const row of all){if(!finite(row.ma[p])||!finite(row.ma[q])){dir=0;continue;}const now=Math.sign(row.ma[p]-row.ma[q]);if(!now)continue;
            if(dir&&now!==dir){const i=visible.findIndex(v=>v.trade_date===row.trade_date);if(i>=0&&finite(row.high)&&finite(row.low)){const signalKey=row.trade_date+':'+now;if(!signals.has(signalKey))signals.set(signalKey,{i,row,direction:now,items:[]});signals.get(signalKey).items.push(`MA${p}/MA${q} ${fmt(row.ma[p])}/${fmt(row.ma[q])}`);}}dir=now;
          }
        }
        for(const s of signals.values()){
          const now=s.direction,cy=y(now>0?s.row.low:s.row.high)+(now>0?10:-10),cx=x(s.i),label=`${now>0?'金叉':'死叉'} ${s.row.trade_date}：${s.items.join('；')}`;
          m+=`<g data-signal="${escape(label)}" data-date="${s.row.trade_date}"><path d="M${cx},${cy+(now>0?-4:4)} l-4,${now>0?7:-7} h8 z" fill="${now>0?red:green}"/><rect x="${cx-6}" y="${cy-7}" width="${s.items.length>1?22:12}" height="18" fill="transparent"/>${s.items.length>1?text(cx+5,cy+5,s.items.length,'start',now>0?red:green):''}<title>${escape(label)}</title></g>`;
        }
      }
      for(const i of [...new Set([0,Math.floor(visible.length/2),visible.length-1])])m+=text(x(i),294,visible[i].trade_date,i===0?'start':i===visible.length-1?'end':'middle');
      m+='<g class="hover-overlay"></g>';main.setAttribute('viewBox',`0 0 ${w} 310`);main.innerHTML=m;
      const isVolume=['volume','boll'].includes(preferences.mode);
      let subVals=isVolume?visible.map(b=>finite(b.volume)?b.volume/10000:null):preferences.mode==='rsi'?[0,100]:visible.flatMap(b=>[b.dif,b.dea,b.macd]);subVals=subVals.filter(finite);
      const slo=preferences.mode==='rsi'?0:Math.min(0,...subVals),shi=preferences.mode==='rsi'?100:Math.max(0,...subVals)||1,span=shi-slo||1,sy=v=>subBottom-(v-slo)/span*(subBottom-subTop);
      let s='';for(const v of preferences.mode==='rsi'?[0,30,50,70,100]:[slo,(slo+shi)/2,shi])s+=`<line x1="${left}" y1="${sy(v)}" x2="${w-right}" y2="${sy(v)}" stroke="#e8eeee"/>`+text(w-right+6,sy(v)+3,fmt(v,isVolume?2:3));
      if(isVolume||preferences.mode==='macd')visible.forEach((b,i)=>{const v=isVolume?(finite(b.volume)?b.volume/10000:null):b.macd;if(!finite(v))return;const c=isVolume?(b.close>=b.open?red:green):(v>=0?red:green);s+=`<rect x="${x(i)-candleW/2}" y="${Math.min(sy(v),sy(0))}" width="${candleW}" height="${Math.max(.2,Math.abs(sy(v)-sy(0)))}" fill="${c}"/>`;});
      if(preferences.mode==='macd')s+=line(visible.map(b=>b.dif),colors[5],x,sy)+line(visible.map(b=>b.dea),colors[10],x,sy);
      if(preferences.mode==='rsi')s+=[6,14,24].map((n,i)=>line(visible.map(b=>b.rsi[n]),[colors[5],colors[10],colors[20]][i],x,sy)).join('');
      if(!subVals.length)s+=text(20,65,'该来源的成交量单位未核实 / 无有效值');
      s+='<g class="hover-overlay"></g>';sub.setAttribute('viewBox',`0 0 ${w} 142`);sub.innerHTML=s;
      geometry={w,left,right,plotW,top,bottom,lo,hi,y,x,slo,shi,subTop,subBottom,sy,isVolume};
      const active=hovered&&visible.find(b=>b.trade_date===hovered)||visible.at(-1);legends(active);tip(active);tooltip.hidden=hidden;
    }
    function onPointer(event){const svg=event.currentTarget,r=svg.getBoundingClientRect(),g=geometry; if(!g)return;const px=(event.clientX-r.left)/r.width*g.w,py=(event.clientY-r.top)/r.height*(svg===main?310:142);const inY=svg===main?py>=g.top&&py<=g.bottom:py>=g.subTop&&py<=g.subBottom;if(px<g.left||px>g.w-g.right||!inY){clearHover();return;}const i=Math.max(0,Math.min(visible.length-1,Math.floor((px-g.left)/g.plotW*visible.length))),b=visible[i];hovered=b.trade_date;hidden=false;tooltip.hidden=false;tip(b);legends(b);
      for(const plot of [main,sub])plot.querySelector('.hover-overlay').innerHTML=`<line x1="${g.x(i)}" y1="${plot===main?g.top:g.subTop}" x2="${g.x(i)}" y2="${plot===main?g.bottom:g.subBottom}" stroke="#859b9f" stroke-dasharray="3 3"/>`;
      const axisY=svg===main?g.hi-(py-g.top)/(g.bottom-g.top)*(g.hi-g.lo):g.shi-(py-g.subTop)/(g.subBottom-g.subTop)*(g.shi-g.slo);
      svg.querySelector('.hover-overlay').innerHTML+=`<line x1="${g.left}" y1="${py}" x2="${g.w-g.right}" y2="${py}" stroke="#859b9f" stroke-dasharray="3 3"/><rect x="${g.w-g.right}" y="${py-10}" width="${g.right}" height="20" fill="#e5f1ed"/>`+text(g.w-g.right+4,py+4,fmt(axisY,svg===main||g.isVolume?2:3),'start','#12615d');
      main.querySelector('.hover-overlay').innerHTML+=`<rect x="${Math.max(0,Math.min(g.w-100,g.x(i)-50))}" y="279" width="100" height="22" fill="#e5f1ed"/>`+text(Math.max(50,Math.min(g.w-50,g.x(i))),294,b.trade_date,'middle','#12615d');
      if(svg===main){const boxWidth=tooltip.offsetWidth;const proposed=px+14+boxWidth>root.clientWidth-8?px-boxWidth-14:px+14;tooltip.style.left=Math.max(8,Math.min(root.clientWidth-boxWidth-8,proposed))+'px';tooltip.style.top='42px';}
      const signal=event.target.closest?.('[data-signal]');if(signal){tooltip.innerHTML='<strong>'+escape(signal.dataset.signal)+'</strong>';}
    }
    function clearHover(){hovered=null;hidden=true;tooltip.hidden=true;for(const svg of [main,sub]){const over=svg.querySelector('.hover-overlay');if(over)over.innerHTML='';}if(visible?.length)legends(visible.at(-1));}
    for(const svg of [main,sub]){svg.addEventListener('pointermove',onPointer);svg.addEventListener('pointerleave',event=>{if(event.relatedTarget!==main&&event.relatedTarget!==sub)clearHover();});svg.addEventListener('pointerup',event=>{if(event.pointerType==='touch')clearHover();});}
    root.querySelectorAll('[data-mode]').forEach(button=>button.onclick=()=>{preferences.mode=button.dataset.mode;root.querySelectorAll('[data-mode]').forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',b===button);});draw();});
    root.querySelectorAll('[data-ma]').forEach(input=>input.onchange=()=>{preferences.ma=[...root.querySelectorAll('[data-ma]:checked')].map(e=>+e.dataset.ma).sort((a,b)=>a-b);draw();});
    root.querySelector('#cross-setting').onchange=e=>{preferences.cross=e.target.checked;draw();};
    root.querySelectorAll('[data-range]').forEach(button=>button.onclick=()=>{const which=button.dataset.range,si=root.querySelector('#chart-start'),ei=root.querySelector('#chart-end');if(which==='apply'){if(si.value<first||ei.value>end||si.value>ei.value||!si.value||!ei.value){root.querySelector('#chart-range-note').textContent='日期须在样本边界内，开始不能晚于结束；请选择后重试。';return;}startDate=si.value;endDate=ei.value;}else if(which==='reset'){startDate=anchor.toISOString().slice(0,10);endDate=end;}else{let a=all.findIndex(b=>b.trade_date>=(startDate<first?first:startDate)),b=all.findIndex(v=>v.trade_date>=endDate);if(b<0)b=all.length-1;const n=b-a+1,shift=which==='older'?-Math.max(1,Math.floor(n/2)):Math.max(1,Math.floor(n/2));a=Math.max(0,Math.min(all.length-n,a+shift));startDate=all[a].trade_date;endDate=all[Math.min(all.length-1,a+n-1)].trade_date;}si.value=startDate<first?first:startDate;ei.value=endDate;clearHover();draw();});
    draw();
  }
  return {mount,calculate,preferences};
})();
