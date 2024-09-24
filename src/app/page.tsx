import '@/app/css/App.css'
// import '../'

export default function Home() {
  async function create(formData: FormData) {
    'use server'
    console.log(">>>>check form data: ", formData.get("username"))

  }

  return (
    <div className='body'>
      <div className='move'>
        <div className="loading-cat ">
          <div className="body"></div>
          <div className="head">
            <div className="face"></div>
          </div>
          <div className="foot">
            <div className="tummy-end">
            </div>
            <div className="bottom">
            </div>
            <div className="legs left">
            </div>
            <div className="legs right">
            </div>
          </div>
          <div className="hands left">
          </div>
          <div className="hands right">
          </div>
        </div>

      </div>


    </div>
  )
}
