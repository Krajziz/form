import Tooltip from './Tooltip.js';

export default function TextField(props) {
    const {name, placeholder, value, onChange} = props;

    // id, name, class, onchange, onblur, tabindex, readonly, required, disabled, minlength, maxlength, placeholder, mask, tooltip

    return (
        <div className="form-group row">
            <label htmlFor={name} className="col-sm-2 col-form-label">{name} : *</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id={name} name={name} placeholder={placeholder} value={value} onChange={onChange}/>
            </div>
        </div>
    );
}

