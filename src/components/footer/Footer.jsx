import React from 'react'
import "./footer.scss"

export default function Footer(props) {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="links">
          <h5>About</h5>
          <div className="link">
            <a href="">How Airbnb works</a>
            <a href="">Newsroom</a>
            <a href="">Airbnb 2021</a>
            <a href="">Investors</a>
            <a href="">Airbnb Plus</a>
            <a href="">Airbnb Luxe</a>
            <a href="">Hotel Tonight</a>
            <a href="">Airbnb for Work</a>
            <a href="">Made possible by Hosts</a>
            <a href="">Careers</a>
            <a href="">Founder's Letter</a>
          </div>
        </div>
        <div className="links">
          <h5>Community</h5>
          <div className="link">
            <a href="">Diversity & Blogging</a>
            <a href="">Accessibility</a>
            <a href="">Airbnb Associates</a>
            <a href="">Frontline Stays</a>
            <a href="">Guest Referrals</a>
            <a href="">Airbnb.org</a>
          </div>
        </div>
        <div className="links">
          <h5>Host</h5>
          <div className="link">
            <a href="">Host your home</a>
            <a href="">Host an Online Experience</a>
            <a href="">Host an Experience</a>
            <a href="">Responsible hosting</a>
            <a href="">Resource Centre</a>
            <a href="">Community Centre</a>
          </div>
        </div>
        <div className="links">
          <h5>Support</h5>
          <div className="link">
            <a href="">Our COVID-19 Response</a>
            <a href="">Help Centre</a>
            <a href="">Cancellation options</a>
            <a href="">Neighbourhood Support</a>
            <a href="">Trust & Safely</a>
          </div>
        </div>
      </div>
      <hr />
      <div className="endFooter">
        <div className="copyright">
          <a href="">&copy; 2021 Airbnb, Inc</a>
          <span aria-hidden="true">·</span>
          <a href="">Privacy</a>
          <span aria-hidden="true">·</span>
          <a href="">Terms</a>
          <span aria-hidden="true">·</span>
          <a href="">Sitemap</a>
          <span aria-hidden="true">·</span>
          <a href="">Company details</a>
        </div>
        <div className="languageAndSocial">
          <div className="language">
            <a href="">
              <span>
              <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        height: 16,
        width: 16,
      }}
      aria-hidden="true"
      fill="currentColor"
      {...props}
    >
      <path d="M8.002.25a7.77 7.77 0 017.748 7.776 7.75 7.75 0 01-7.521 7.72l-.246.004a7.75 7.75 0 01-7.73-7.513L.25 7.992A7.75 7.75 0 018.002.25zm1.949 8.5H6.048c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 003.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 003.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576l-.115.046a6.257 6.257 0 00-3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904C9.796 4.347 8.774 1.907 8.06 1.756l-.065-.007zm2.28.432l.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 00-3.929-5.068z" />
    </svg>
    </span>English(IN)
    </a>
            <a href="">
            <span>
            ₹
            </span>
            INR
            </a>
          </div>
          <div className="socialMedia">
            <a href="">
              <svg
                viewBox="0 0 32 32"
                aria-hidden="false"
                aria-label="Navigate to Facebook"
                style={{
                  height: 18,
                  width: 18,
                }}
                display="block"
                fill="currentColor"
                {...props}
              >
                <path
                  d="M8 14.41v-4.17c0-.42.35-.81.77-.81h2.52V7.35c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81H12.1c-.42 0-.8-.39-.8-.81v-16H8.78a.78.78 0 01-.78-.78"
                  fillRule="evenodd"
                />
              </svg></a>
            <a href="">
              <svg
                viewBox="0 0 32 32"
                aria-hidden="false"
                aria-label="Navigate to Twitter"
                style={{
                  height: 18,
                  width: 18,
                }}
                display="block"
                fill="currentColor"
                {...props}
              >
                <path
                  d="M31 6.36c-1.16.49-2.32.82-3.55.95 1.29-.76 2.22-1.87 2.72-3.38a13.05 13.05 0 01-3.91 1.51c-1.23-1.28-2.75-1.94-4.51-1.94-3.41 0-6.17 2.73-6.17 6.12 0 .49.07.95.17 1.38-4.94-.23-9.51-2.6-12.66-6.38-.56.95-.86 1.97-.86 3.09 0 2.07 1.03 3.91 2.75 5.06-1-.03-1.92-.3-2.82-.76v.07c0 2.89 2.12 5.42 4.94 5.98-.63.17-1.16.23-1.62.23-.3 0-.7-.03-1.13-.13a6.07 6.07 0 005.74 4.24c-2.22 1.74-4.78 2.63-7.66 2.63-.56 0-1.06-.03-1.43-.1 2.85 1.84 6 2.76 9.41 2.76 7.29 0 12.83-4.01 15.51-9.3 1.36-2.66 2.02-5.36 2.02-8.09v-.46c-.03-.17-.03-.3-.03-.33A12.66 12.66 0 0031 6.35"
                  fillRule="evenodd"
                />
              </svg></a>
            <a href="">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="false"
                aria-label="Navigate to Instagram"
                style={{
                  height: 18,
                  width: 18,
                }}
                display="block"
                fill="currentColor"
                {...props}
              >
                <path
                  d="M23.09.91C22.48.3 21.76 0 20.92 0H3.08C2.23 0 1.51.3.91.91S0 2.24 0 3.08v17.84c0 .85.3 1.57.91 2.17s1.33.91 2.17.91h17.84c.85 0 1.57-.3 2.17-.91s.91-1.33.91-2.17V3.08c0-.85-.3-1.57-.91-2.17zM8.61 8.65c.94-.91 2.08-1.37 3.4-1.37 1.33 0 2.47.46 3.41 1.37s1.41 2.01 1.41 3.3-.47 2.39-1.41 3.3-2.08 1.37-3.41 1.37c-1.32 0-2.46-.46-3.4-1.37s-1.41-2.01-1.41-3.3.47-2.39 1.41-3.3zm12.66 11.63c0 .27-.09.5-.28.68a.92.92 0 01-.67.28H3.62a.93.93 0 01-.68-.28.92.92 0 01-.27-.68V10.15h2.2a6.74 6.74 0 00-.31 2.05c0 2 .73 3.71 2.19 5.12s3.21 2.12 5.27 2.12a7.5 7.5 0 003.75-.97 7.29 7.29 0 002.72-2.63 6.93 6.93 0 001-3.63c0-.71-.11-1.39-.31-2.05h2.11v10.12zm0-13.95c0 .3-.11.56-.31.77a1.05 1.05 0 01-.77.31h-2.72c-.3 0-.56-.11-.77-.31a1.05 1.05 0 01-.31-.77V3.75c0-.29.11-.54.31-.76s.47-.32.77-.32h2.72c.3 0 .56.11.77.32s.31.47.31.76z"
                  fillRule="evenodd"
                />
              </svg></a>
          </div>
        </div>
      </div>
    </div>
  )
}
