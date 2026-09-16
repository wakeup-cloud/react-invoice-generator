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
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* 1. 顶部蓝色大背景区 */}
      <header style={{ backgroundColor: '#2563eb', color: '#ffffff', paddingTop: '40px', paddingBottom: '120px', paddingLeft: '20px', paddingRight: '20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 6px 0', color: '#ffffff' }}>
              Free Online Invoice Generator
            </h1>
            <p style={{ margin: 0, color: '#bfdbfe', fontSize: '14px' }}>
              Create and download professional PDF invoices instantly.
            </p>
          </div>
          <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '6px 12px', borderRadius: '20px', fontSize: '12px' }}>
            100% Free & Secure
          </span>
        </div>
      </header>

      {/* 2. 发票工具主体（负 margin 向上嵌入） */}
      <main style={{ maxWidth: '900px', margin: '-80px auto 0 auto', padding: '0 20px 60px 20px', position: 'relative', zIndex: 10 }}>
        <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
          <InvoicePage data={data} onChange={onInvoiceUpdated} />
        </div>
      </main>

    </div>
  )
}

export default App
