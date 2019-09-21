import React from 'react';

const QWithReveal = ({q, a, rowType}) => {
    var quandaClass = Number(rowType) % 2 ? "quandaBlock-odd" : "quandaBlock-even";
    return (
        <div className={quandaClass}>
            <h2 className="qBlock">{q}</h2>
            <h2 className="aBlock">{a}</h2>
        </div>
    )
}

export default QWithReveal;