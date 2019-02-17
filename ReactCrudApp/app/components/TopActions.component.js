// component that contains all the logic and other smaller components
// that form the Read Products view
class TopActionsComponent extends React.Component{
// component that contains the functionalities that appear on top of
// the products table: create product
    render(){
        return (
            <div>
                <a href='#'
                   onClick={() => this.props.changeAppMode('create')}
                   className='btn btn-primary margin-bottom-1em'> Create product
                </a>
            </div>
        )
    }
}