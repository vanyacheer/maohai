import type { Metadata } from "next";
import { PageHero } from "@/components/site-shell";
import { getSiteContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "隱私權政策",
  description: "毛孩呼吸隱私權政策，說明聯絡表單個人資料的蒐集項目、使用目的、保存方式與您可行使的權利。",
};

export default async function Privacy() {
  const { contact } = await getSiteContent();
  return (
    <>
      <PageHero
        eyebrow="隱私權政策"
        title="我們如何保護您與毛孩的資料"
        text="毛孩呼吸重視您的個人資料保護，以下說明我們蒐集、使用與保存資料的方式。"
      />
      <section className="section">
        <div className="container legal-content">
          <p className="updated-at">最後更新日期：2026 年 8 月 17 日</p>

          <h2>一、適用範圍</h2>
          <p>
            本隱私權政策適用於「毛孩呼吸」官方網站（以下稱「本網站」）。當您使用本網站的線上諮詢表單、電話、LINE
            或電子郵件與我們聯繫時，即表示您已閱讀並同意本政策的內容。
          </p>

          <h2>二、我們蒐集哪些資料</h2>
          <p>當您透過本網站的聯絡表單與我們聯繫時，我們會蒐集您主動提供的以下資訊：</p>
          <ul>
            <li>姓名</li>
            <li>聯絡電話</li>
            <li>毛孩狀況（品種、年齡、症狀等，屬選填欄位）</li>
            <li>諮詢項目與留言內容</li>
          </ul>
          <p>
            本網站不會透過表單以外的方式主動蒐集您的個人資料，也不使用 Cookie
            追蹤或第三方廣告追蹤工具。
          </p>

          <h2>三、資料使用目的</h2>
          <p>我們蒐集上述資料，僅用於以下目的：</p>
          <ul>
            <li>回覆您的租借諮詢與相關問題</li>
            <li>協助評估適合毛孩的氧氣機型與租借方案</li>
            <li>安排到府安裝、設備保養與售後聯繫</li>
          </ul>
          <p>我們不會將您的個人資料用於前述目的以外的用途，也不會提供、出售或交換給無關的第三方。</p>

          <h2>四、資料傳輸與儲存方式</h2>
          <p>
            您透過表單送出的資料，會直接以電子郵件方式寄送至我們的客服信箱，作為聯繫與服務紀錄使用；本網站
            並不會將表單資料另外儲存於公開資料庫。我們會採取合理的技術與管理措施，避免資料遭未經授權的存取、
            洩漏、竄改或毀損。
          </p>

          <h2>五、您的權利</h2>
          <p>
            依個人資料保護法相關規定，您就您的個人資料享有查詢、閱覽、複製、補充、更正、停止蒐集處理或利用，
            以及刪除的權利。如您欲行使上述權利，或對資料的使用方式有任何疑問，歡迎透過下方聯絡方式與我們聯繫，
            我們將於合理時間內處理您的請求。
          </p>

          <h2>六、政策的修訂</h2>
          <p>
            本政策內容如有變更，將於本頁面更新公告，不另作個別通知。建議您於使用本網站服務前，定期查閱本頁面
            以確認最新內容。
          </p>

          <h2>七、聯絡我們</h2>
          <p>
            若您對本隱私權政策有任何疑問，歡迎透過以下方式與我們聯繫：
            <br />
            電話：{contact.phone}｜LINE：{contact.line}｜Email：{contact.email}
          </p>
        </div>
      </section>
    </>
  );
}
