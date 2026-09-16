import InvoicePage from './components/InvoicePage'
import { Invoice } from './data/types'
// 1. 引入背景图
import bannerImg from './images/banner.jpg'

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
      
      {/* 1. 顶部 Hero 背景区（加背景图 + 增加高度） */}
      <header style={{ 
        backgroundColor: '#2563eb', 
        backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.85), rgba(37, 99, 235, 0.85)), url(${bannerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff', 
        paddingTop: '60px', 
        paddingBottom: '160px', /* 👈 增加底部内边距，让蓝色高度更大 */
        paddingLeft: '20px', 
        paddingRight: '20px' 
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            {/* 优化后的 SEO 标题 */}
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', margin: '0 0 8px 0', color: '#ffffff', letterSpacing: '-0.5px' }}>
              Free Online Invoice Generator
            </h1>
            {/* 优化后的 SEO 副标题 */}
            <p style={{ margin: 0, color: '#e0f2fe', fontSize: '15px', lineHeight: '1.5' }}>
              Create, customize, and download professional PDF invoices online in seconds. 100% free with no sign-up required.
            </p>
          </div>
          <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(4px)', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
            100% Free & Secure
          </span>
        </div>
      </header>

      {/* 2. 发票工具主体（配合高度增大 -margin-top） */}
      <main style={{ maxWidth: '900px', margin: '-110px auto 0 auto', padding: '0 20px 60px 20px', position: 'relative', zIndex: 10 }}>
        <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
          <InvoicePage data={data} onChange={onInvoiceUpdated} />
        </div>
      </main>

    </div>
  )
}

export default App
