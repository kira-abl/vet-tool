function Section(props) {
    const config = {
        defaultExpanded: props.defaultExpanded || false,
        collapsedHeight: props.collapsedHeight || 0
    };
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

    return (
    <div className="collapsible">
        <div className={(isExpanded ? 'headersHidden' : 'headers')} {...getToggleProps()}>
        <div className="icon" style={{ color: "#F26A56" }}>
            <i className={'fa-solid fa-chevron-' + (isExpanded ? 'down' : 'right')}></i>
            </div>   
            <div className="title">{props.title}</div>
            <div className="icon" style={{ color: "#F26A56" }}>
                <i className={'fa-solid fa-chevron-' + (isExpanded ? 'down' : 'right')}></i>
            </div>
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                {props.children}
            </div>
        </div>
    </div>
    );
}