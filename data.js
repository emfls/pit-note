export const checkedAt='2026-11-14';
export const resources=[
{id:'calendar',type:'일정',title:'경기 일정 확인',en:'calendar schedule race',summary:'다음 관전 계획을 세우기 전에 공식 캘린더에서 해당 라운드를 확인하세요. 현지 날짜와 한국 날짜가 다를 수 있습니다.',url:'https://www.formula1.com/en/racing/2026',action:'www.formula1.com · 일정'},
{id:'results',type:'결과',title:'경기 결과 확인',en:'results race',summary:'기억이나 중계 중간 화면 대신 공식 최종 결과를 확인하는 출발점입니다. 이 사이트는 결과표를 복제하거나 자동 갱신하지 않습니다.',url:'https://www.formula1.com/en/results/2026/races',action:'www.formula1.com · 결과'},
{id:'standings',type:'결과',title:'드라이버 순위 확인',en:'drivers standings points',summary:'개별 경기 결과와 시즌 누적 순위는 다릅니다. 보고 있는 연도를 확인한 뒤 공식 순위표를 살펴보세요.',url:'https://www.formula1.com/en/results/2026/drivers',action:'www.formula1.com · 순위'},
{id:'teams',type:'팀·드라이버',title:'현재 팀 찾아보기',en:'teams constructors',summary:'공식 팀 디렉터리로 이동합니다. 팀 명칭·소속은 바뀔 수 있어 여기에는 고정된 명단을 복사해 두지 않습니다.',url:'https://www.formula1.com/en/teams',action:'www.formula1.com · 팀'},
{id:'drivers',type:'팀·드라이버',title:'현재 드라이버 찾아보기',en:'drivers line up',summary:'드라이버별 공식 소개 페이지를 찾는 입구입니다. 시즌 초 명단과 현재 출전 명단을 혼동하지 않도록 확인하세요.',url:'https://www.formula1.com/en/drivers',action:'www.formula1.com · 드라이버'},
{id:'rights',type:'운영·출처',title:'콘텐츠 사용 기준',en:'rights licence trademark',summary:'공식 로고·사진·통계·결과 자료는 자유 재사용을 전제할 수 없습니다. 원문 지침을 확인하고 필요한 사용권을 별도로 확보해야 합니다.',url:'https://www.formula1.com/en/information/guidelines.4EOKE9RRqevL4niTK9kWyt',action:'www.formula1.com · 지침'}
];
export function selectResources(q='',type='전체'){const n=q.toLowerCase().replace(/\s/g,'');return resources.filter(r=>(type==='전체'||r.type===type)&&`${r.title}${r.summary}${r.en}`.toLowerCase().replace(/\s/g,'').includes(n));}
export const checklist=['원문에서 라운드와 날짜를 확인했다','표시 시간대와 한국 시간의 차이를 확인했다','관심 있는 팀 또는 드라이버를 골랐다','관전 후 공식 결과를 다시 확인했다'];
export function noteText(title,memo,done){return `피트노트 · 개인 관전 메모\n${title.slice(0,120)}\n\n${checklist.map((s,i)=>`[${done.includes(i)?'x':' '}] ${s}`).join('\n')}\n\n${memo.slice(0,6000)}\n\n이 메모는 경기 공식 기록이 아닙니다.`;}
