
export default function Select(props){
    
    function handleOnChange(event){
        props.changeFc(event.target.value);
    }

    return(
        <div className="select">
            <select onChange={handleOnChange}>
                {
                    props.selectItems.map((element, key) => {
                        return(
                            <option value={element.id} key={key}>
                                {element.kategorianev}
                            </option>    
                        )
                    })
                }
            </select>
        </div>
    )
}
