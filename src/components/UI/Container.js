import "./Container.css"
const Container = (props) => {
    //used to make sure classes can be added to a customized tag
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    ) 
}
export default Container