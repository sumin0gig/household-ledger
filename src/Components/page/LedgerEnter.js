import React from 'react';

const LedgerEnter = () => {
	const date= new Date();
	console.log(date.getMonth()+1);
	return (
		<div>
			<h2>거래 입력</h2>
			<div>
				<div>
					<span>날짜</span>
					{/* 아래의 value를 기본값으로 설정하고 onchange 될때마다 값 변경 */}
					{/* 값 DB에 입력 axios.post */}
					<input type='number' min={1999} value={date.getFullYear()}/>
					<input type='number' min={1} max={12} value={date.getMonth()+1} />
					<input type='number' min={1} max={31} value={date.getDay()}/>
				</div>
				<div>
					<span>품목</span><input type='text'/>
				</div>
				<div>
					<span>금액</span><input type='number' step={1000}/>
					 </div>
				<div>
					<span>차변</span><input type='text'/>
				</div>
				<div>
					<span>대변</span><input type='text'/>
				</div>
				<div>
					<span>만족</span>
				</div>
			</div>
		</div>

	);
};

export default LedgerEnter;