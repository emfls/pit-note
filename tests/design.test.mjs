import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
const h=fs.readFileSync('index.html','utf8');
test('paddock journal has distinct layout and honest source framing',()=>{assert.match(h,/class="paddock-hero"/);assert.match(h,/SCHEMATIC/);assert.match(h,/실시간 중계·순위 서비스가 아닙니다/);assert.match(h,/이 도구는 경기 일정을 불러오지 않습니다/);assert.match(h,/style-v2.css\?v=paddock-20261115/);assert.match(h,/class="route-layout"/);});
test('all app targets unique',()=>{for(const x of ['query','type','count','cards','reset','checks','note','note-title','memo','note-status','clear-note','route-content','route-buttons','time-form','source-time','source-offset','time-result','reset-time'])assert.equal((h.match(new RegExp(`id="${x}"`,'g'))||[]).length,1,x);});
