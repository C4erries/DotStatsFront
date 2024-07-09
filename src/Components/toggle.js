import React, {Component} from 'react';

class Toggle extends Component {
    render() {
        return (
            <div className="flex absolute w-10">
                <div className="relative resize p-1">
                    <input type="checkbox" role="switch" style={{width: "1.2em"}} className="neon"/>
                </div>
            </div>
        );
    }
}

export default Toggle;