import { React } from 'react';
import './DivContentTree.css';
import MiniStar from '../GeneralContent/MiniStar';

export default function DivContentTree (props) {
    return(
        <div className='divContentTree' style={{
            backgroundColor: props.backgroundColor,
        }}>
            <div className='divContentTreeFirst'>
                <div>
                    <img className='accountIcon' src={props.icon} alt='icon'/>
                    <div className='divContentTreeFirstChild'>
                        <h4>{props.name}</h4>
                        <p id='divContentTreeFirstChildP'>{props.job}</p>
                    </div>
                </div>
                <div className='star'>
                    <MiniStar/>
                </div>
            </div>
            <p className='divContentTreeParagraph'>{props.paragraph}</p>
        </div>
    )
}