import React from 'react';
import QWithReveal from './QWithReveal';
import GetNewQ from '../NewQs/GetNewQ';

const ClassRoom = (props) => {
    var Qlist = [];
    var QTypeSplit = props.QType.split('-');
    console.log(props.QType, QTypeSplit)
    for (var i=0; i<5; i++) {
        var newQ=GetNewQ(QTypeSplit[0], QTypeSplit[1]);
        Qlist.push(
            <QWithReveal q={newQ.q} a={newQ.a} rowType={''+i} key={i} />
        )
    }
    return (
        <div>
            <h2>This is the class room</h2>
            <h3>Where you simply click to see the answers</h3>
            {Qlist}
        </div>
    )
}

export default ClassRoom;