const products = [
    {
        item: 'salmon',
        brand: 'seaking',
        units: 'lbs',
        quantity: 3,
        isPurchased: false
    },

    {
        item: 'onions',
        brand: 'flonions',
        units: 'lbs',
        quantity: 2,
        isPurchased: true
    },
    {
        item: 'chicken',
        brand: 'perdue',
        units: 'lbs',
        quantity: 5,
        isPurchased: false
    }



]
class App extends React.Component {
    state = {
        product: products
    }
    render() {
        // console.log(this.props)
        return (
            <div>

            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#container')

)