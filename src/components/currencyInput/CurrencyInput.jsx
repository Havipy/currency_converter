import cl from './CurrencyInput.module.scss';

function CurrencyInput(props) {
	return (
		<div className={cl.wrapper}>
			<select className={cl.currencySelect} value={props.currency} onChange={ev => {
				props.onCurrencyChange(ev.target.value)
			}}>
				{props.currencies.map((currency => (
					<option key={currency} value={currency}>{currency}</option>
				)))}
			</select>
			<input className={cl.amountInput} type="number" value={props.amount} onChange={ev => {
				const val = ev.target.value.replace(/[^\d,.]*/g, '')
					.replace(/([,.])[,.]+/g, '$1')
					.replace(/^[^\d]*(\d+([.,]\d{0,5})?).*$/g, '$1');
				props.onAmountChange(val)
			}
			} />

		</div >
	);
}

export default CurrencyInput;
