const listOfProducts = [
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
];
class App extends React.Component {
    state = {
        products: listOfProducts,
        item: '',
        brand: '',
        units: '',
        quantity: '',
        isPurchased: true
    }


    handleChange = (event) => {
        console.log(event.target.value)

        this.setState({
            // 
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newItem = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: this.state.quantity,
            isPurchased: false
        }
        //console.log(newItem);

        this.setState({
            products: [newItem, ...this.state.products],
            item: '',
            brand: '',
            units: '',
            quantity: '',
            isPurchased: true
        })
    }
    render() {
        console.log(this.props)
        return (
            <div className="whole-container">
                <h1>GROCERIES LIST</h1>

                <div className="grid-container">
                    <div className="item">
                        <h3>Products</h3>
                        <table>
                            <tr>
                                <th>Item</th>
                                <th>Brand</th>
                                <th>Units</th>
                                <th>Quantity</th>
                                <th></th>
                            </tr>
                            {
                                this.state.products.map(p => {
                                    return (
                                        <tr >
                                            <td>{p.item}</td>
                                            <td>{p.brand}</td>
                                            <td>{p.units}</td>
                                            <td>{p.quantity}</td>
                                            <td>{p.isPurchased}</td>
                                            <td>
                                                <input type="checkbox" checked={p.isPurchased} />
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </div>
                    <div clssName="item">
                        <h3>Form</h3>
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor='item'>Item: </label>
                            <input id='item' type='text' value={this.state.item} onChange={this.handleChange} /> <br />
                            <label htmlFor='price'>Brand: </label>
                            <input id='brand' type='text' value={this.state.brand} onChange={this.handleChange} /><br />
                            <label htmlFor='description'>Units: </label>
                            <input id='units' type='text' value={this.state.units} onChange={this.handleChange} /><br />
                            <label htmlFor='description'>Quantity: </label>
                            <input id='quantity' type='number' value={this.state.quantity} onChange={this.handleChange} /><br />
                            <input type='submit' />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

// class Shopping extends React.Component {
//     render() {
//         // console.log('Cart', this.props.)
//         return (
//             <div>

//             </div>
//         )
//     }
// }

ReactDOM.render(
    <App />,
    document.querySelector('#container')

)