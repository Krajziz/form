export default  function Select(props) {
    const {name, value, onChange} = props;

    return (
        <div className="form-group row">
            <label htmlFor="exampleFormControlSelect1" className="col-sm-2 col-form-label">{name} : *</label>
            <div className="col-sm-10">
                <select className="form-control" id={name} value={value} onChange={onChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
            </div>
        </div>
    );
}