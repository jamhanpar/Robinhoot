import React from 'react';

class TransactionForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = { status: 'buy' }
        this.buySelected = 'highlight-selected'
        this.sellSelected = ''
    }

    handleClick(field, option) {     
        this.setState({ [field]: option })        
    }

    render() {
        let costOrCredit = 'cost'
        let buyingPowerOrOwnedShares = 'Buying Power Available';

        if (this.state.status === 'buy') {
            costOrCredit = 'cost';
            buyingPowerOrOwnedShares = 'Buying Power Available';
            this.buySelected = 'highlight-selected';
            this.sellSelected = '';
        } else {
            costOrCredit = 'credit';
            buyingPowerOrOwnedShares = 'Shares Available - Sell All';
            this.buySelected = '';
            this.sellSelected = 'highlight-selected';
        }

        return (
            <div className="transaction-form-container">
                <div className="transaction-form">
                    <div className="buy-sell-options-container">
                        <div className={`${this.buySelected}`}>
                            <h1 className="buy-option" onClick={() => this.handleClick('status', 'buy')}>Buy AAPL</h1>
                        </div>
                        <div className={`sell-option-container ${this.sellSelected}`}>
                            <h1 className="sell-option" onClick={() => this.handleClick('status', 'sell')}>Sell AAPL</h1>
                        </div>
                    </div>
                    <div className="transaction-inputs-container">
                        <div className="form-elements investing-option-container">
                            <h1 className="transaction-title">Invest In</h1>
                            <input className="dollar-shares-input" type="text" placeholder="Shares"/>
                        </div>
                        <div className="form-elements desired-shares-container">
                            <h1 className="transaction-title">Shares</h1>
                            <input className="shares-input" type="text" placeholder="0"/>
                        </div>
                        <div className="form-elements market-price-container">
                            <div className="market-price-title-container">
                                <h1 className="transaction-title-green market-price">Market Price</h1>
                            </div>
                            <p className="transaction-title-bold">$136.60</p>
                        </div>
                        <div className="form-elements estimated-cost-container">
                            <h1 className="transaction-title-bold estimated-cost">Estimated {costOrCredit}</h1>
                            <p className="transaction-title-bold">$0.00</p>
                        </div>
                        <div className="review-btn-container">
                            <button type="submit" className="transaction-btn transaction-submit-btn">Review Order</button>
                        </div>
                    </div>
                    {/* <div className="border-top"> */}
                    <div className="buying-power-show-container">
                        <p className="transaction-title-green buying-power-available">$100.00 {buyingPowerOrOwnedShares}</p>
                    </div>
                    {/* </div> */}
                </div>
                <div className="stock-detail-button-container">
                    <div className="trade-stock-options-button-container">
                        <button className="transaction-btn">Trade AAPL Options</button>
                    </div>
                    <div className="add-to-list-button-container">
                        <button className="transaction-btn">Add to Lists</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TransactionForm;