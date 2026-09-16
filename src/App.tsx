import InvoicePage from './components/InvoicePage'
import { Invoice } from './data/types'

function App() {
  const savedInvoice = window.localStorage.getItem('invoiceData')
  let data = null

  try {
    if (savedInvoice) {
      data = JSON.parse(savedInvoice)
    }
  } catch (_e) {}

  const onInvoiceUpdated = (invoice: Invoice) => {
    window.localStorage.setItem('invoiceData', JSON.stringify(invoice))
  }

  return (
  <div className="app">
    <h1 className="center fs-30">Make Invoice Online</h1>
    <InvoicePage data={data} onChange={onInvoiceUpdated} />
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', background: '#fff', borderRadius: '8px' }}>
      <h2>Free Online Invoice Generator</h2>
      <p>Create and download professional PDF invoices instantly with our free online invoice maker. Perfect for freelancers, contractors, and small business owners.</p>
      <h3>Frequently Asked Questions</h3>
      <details style={{ margin: '10px 0' }}>
        <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Is this invoice generator free?</summary>
        <p>Yes, it is 100% free with no sign-up or registration required.</p>
      </details>
    </div>
  </div>
)
}

export default App
