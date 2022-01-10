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
    render() {
        console.log(this.props)
        return (
            <div className="whole-container">
                <h1>LIST</h1>

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
                                            <td>
                                                {
                                                    <input type="checkbox" id="isPurchased" value="{p.isPurchased}" />
                                                }
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </div>
                    <div clssName="item">
                        <h3>form</h3>
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor='name'>Item: </label>
                            <input id='item' type='text' value={this.state.item} onChange={this.handleChange} />
                            <label htmlFor='price'>brand: </label>
                            <input id='brand' type='text' value={this.state.brand} onChange={this.handleChange} />
                            <label htmlFor='description'>units: </label>
                            <input id='units' type='text' value={this.state.units} onChange={this.handleChange} />
                            <label htmlFor='description'>quantity: </label>
                            <input id='quantity' type='text' value={this.state.quantity} onChange={this.handleChange} />
                            <input type='submit' />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

class Shopping extends React.Component {
    render() {
        // console.log('Cart', this.props.)
        return (
            <div>
                <h1>{this.props.product}</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#container')

)