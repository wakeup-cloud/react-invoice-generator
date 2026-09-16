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
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      
      {/* 1. 顶部蓝色 Hero 大背景区 */}
      <header className="bg-blue-600 text-white pt-10 pb-28 px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>
            {/* 主标题：SEO 优化且大方专业 */}
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Free Online Invoice Generator
            </h1>
            <p className="text-blue-100 text-sm mt-1">
              Create and download professional PDF invoices instantly.
            </p>
          </div>

          {/* 右上角 GitHub / 品牌图标（可选） */}
          <div className="hidden sm:block">
            <span className="text-xs bg-blue-500 text-blue-100 px-3 py-1.5 rounded-full font-medium">
              100% Free & Secure
            </span>
          </div>
        </div>
      </header>

      {/* 2. 发票工具主体（使用 -mt-20 向上悬浮嵌入蓝色背景） */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 -mt-20 relative z-10 pb-16">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          {/* 你的发票的核心组件 */}
          <InvoicePage data={data} onChange={onInvoiceUpdated} />
        </div>
      </main>

    </div>
  )
}

export default App
