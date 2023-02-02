import React from 'react';

const TitleListPrint=({title,color,data})=>{
	return(
		<div>
			<h4 className={color}>{title}</h4>
			{data.map(d=>d.title===`${title}`?
				<p key={d.id}>{d.desc}<button>X</button></p>
			:""
			)}
	</div>
	)
}

const TitleList = ({data}) => {
	return (
		<>
		<TitleListPrint title="자산" color={"assestcolor"} data={data} />
		<TitleListPrint title="부채" color={"debtcolor"} data={data} />
		<TitleListPrint title="수익" color={"profitcolor"} data={data} />
		<TitleListPrint title="비용" color={"costcolor"} data={data} />
		</>
	);
};

export default TitleList;