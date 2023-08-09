// eslint-disable-next-line no-unused-vars
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import appleStore from "../assets/app.svg";
import playStore from "../assets/play.svg";
import shape2 from "../assets/shape2.png";

const Footer = () => {
  return (
    <Box sx={{ borderTop: "1px solid #E8E8E8", padding: "40px", position: "relative" }}>
      {/* shape */}
      <Box className="shape2">
        <img src={shape2} alt="" />
      </Box>

      <Container>
        <Stack
          spacing={2}
          sx={{ display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "center" } }}
        >
          {/* social icons */}
          <Stack spacing={2} direction="row">
            <Link size="sm" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="14" fill="#4C4C4C" />
                <path
                  d="M13.9765 21.8786C12.7045 21.8786 11.5465 21.6746 10.5025 21.2666C9.45846 20.8586 8.55846 20.2826 7.80246 19.5386C7.04646 18.7946 6.46446 17.9246 6.05646 16.9286C5.64846 15.9206 5.44446 14.8226 5.44446 13.6346C5.44446 12.4466 5.64846 11.3546 6.05646 10.3586C6.46446 9.36258 7.04646 8.49858 7.80246 7.76658C8.57046 7.03458 9.48246 6.46458 10.5385 6.05658C11.5945 5.64858 12.7645 5.44458 14.0485 5.44458C15.2845 5.44458 16.4185 5.64258 17.4505 6.03858C18.4825 6.42258 19.3705 6.96858 20.1145 7.67658C20.8705 8.37258 21.4525 9.20058 21.8605 10.1606C22.2805 11.1206 22.4905 12.1766 22.4905 13.3286C22.4905 14.3606 22.3525 15.2546 22.0765 16.0106C21.8005 16.7546 21.4045 17.3246 20.8885 17.7206C20.3845 18.1166 19.7665 18.3146 19.0345 18.3146C18.2905 18.3146 17.6965 18.0926 17.2525 17.6486C16.8205 17.2046 16.6045 16.5626 16.6045 15.7226V14.6966L16.6765 13.6706L16.5145 11.3306V9.27858H18.5125V15.3986C18.5125 15.8546 18.6025 16.1786 18.7825 16.3706C18.9745 16.5506 19.1965 16.6406 19.4485 16.6406C19.7725 16.6406 20.0485 16.5146 20.2765 16.2626C20.5045 16.0106 20.6725 15.6386 20.7805 15.1466C20.9005 14.6546 20.9605 14.0606 20.9605 13.3646C20.9605 12.4046 20.7925 11.5286 20.4565 10.7366C20.1325 9.94458 19.6585 9.26658 19.0345 8.70258C18.4225 8.12658 17.6905 7.68858 16.8385 7.38858C15.9985 7.07658 15.0685 6.92058 14.0485 6.92058C13.0045 6.92058 12.0565 7.08858 11.2045 7.42458C10.3525 7.74858 9.62046 8.21058 9.00846 8.81058C8.39646 9.41058 7.92246 10.1246 7.58646 10.9526C7.26246 11.7686 7.10046 12.6626 7.10046 13.6346C7.10046 14.6306 7.26246 15.5426 7.58646 16.3706C7.91046 17.1986 8.37246 17.9066 8.97246 18.4946C9.58446 19.0946 10.3105 19.5566 11.1505 19.8806C11.9905 20.2166 12.9325 20.3846 13.9765 20.3846C14.5285 20.3846 15.1105 20.3186 15.7225 20.1866C16.3345 20.0666 16.9165 19.8686 17.4685 19.5926L17.9545 21.0326C17.4025 21.3086 16.7665 21.5186 16.0465 21.6626C15.3265 21.8066 14.6365 21.8786 13.9765 21.8786ZM13.5085 18.3146C12.6805 18.3146 11.9425 18.1226 11.2945 17.7386C10.6465 17.3426 10.1305 16.8026 9.74646 16.1186C9.37446 15.4226 9.18846 14.6246 9.18846 13.7246C9.18846 12.8366 9.37446 12.0506 9.74646 11.3666C10.1185 10.6706 10.6285 10.1306 11.2765 9.74658C11.9365 9.36258 12.6805 9.17058 13.5085 9.17058C14.3125 9.17058 15.0145 9.35058 15.6145 9.71058C16.2145 10.0586 16.6825 10.5686 17.0185 11.2406C17.3545 11.9126 17.5225 12.7406 17.5225 13.7246C17.5225 14.7086 17.3605 15.5426 17.0365 16.2266C16.7125 16.9106 16.2505 17.4326 15.6505 17.7926C15.0505 18.1406 14.3365 18.3146 13.5085 18.3146ZM13.8865 16.5686C14.4025 16.5686 14.8585 16.4606 15.2545 16.2446C15.6505 16.0166 15.9625 15.6866 16.1905 15.2546C16.4305 14.8226 16.5505 14.3126 16.5505 13.7246C16.5505 13.1246 16.4305 12.6206 16.1905 12.2126C15.9625 11.7926 15.6505 11.4746 15.2545 11.2586C14.8585 11.0306 14.4025 10.9166 13.8865 10.9166C13.3585 10.9166 12.8905 11.0306 12.4825 11.2586C12.0865 11.4866 11.7745 11.8106 11.5465 12.2306C11.3305 12.6506 11.2225 13.1486 11.2225 13.7246C11.2225 14.3126 11.3305 14.8166 11.5465 15.2366C11.7745 15.6566 12.0865 15.9866 12.4825 16.2266C12.8905 16.4546 13.3585 16.5686 13.8865 16.5686Z"
                  fill="white"
                />
              </svg>
            </Link>

            <Link size="sm" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M16.257 27.8177C16.1404 27.8367 16.0233 27.8542 15.9058 27.8702C16.0233 27.8542 16.1404 27.8367 16.257 27.8177Z"
                  fill="white"
                />
                <path
                  d="M16.5372 27.7698C16.4814 27.7801 16.4257 27.7895 16.3699 27.7991C16.4257 27.7895 16.4814 27.7801 16.5372 27.7698Z"
                  fill="white"
                />
                <path
                  d="M15.5934 27.9092C15.4568 27.9246 15.3195 27.9383 15.1817 27.9498C15.3195 27.9383 15.4568 27.9246 15.5934 27.9092Z"
                  fill="white"
                />
                <path
                  d="M15.8619 27.8762C15.7964 27.885 15.7303 27.8931 15.6646 27.9008C15.7303 27.8931 15.7964 27.885 15.8619 27.8762Z"
                  fill="white"
                />
                <path
                  d="M16.9188 27.6943C16.8696 27.7047 16.8203 27.7152 16.7709 27.7253C16.8203 27.7152 16.8696 27.7047 16.9188 27.6943Z"
                  fill="white"
                />
                <path
                  d="M17.8644 27.4593C17.8246 27.4706 17.7849 27.4813 17.7452 27.4924C17.7849 27.4813 17.8246 27.4706 17.8644 27.4593Z"
                  fill="white"
                />
                <path
                  d="M17.5786 27.5374C17.5355 27.5487 17.4921 27.5602 17.4487 27.5711C17.4921 27.5602 17.5355 27.5489 17.5786 27.5374Z"
                  fill="white"
                />
                <path
                  d="M17.2039 27.6312C17.1582 27.6419 17.1121 27.6519 17.0659 27.6622C17.1121 27.6519 17.1582 27.6419 17.2039 27.6312Z"
                  fill="white"
                />
                <path
                  d="M15.1769 27.9505C15.1032 27.9567 15.0295 27.9622 14.9556 27.9672C15.0295 27.9622 15.1032 27.9567 15.1769 27.9505Z"
                  fill="white"
                />
                <path
                  d="M28 14C28 6.2692 21.7308 0 14 0C6.2692 0 0 6.2692 0 14C0 21.7308 6.2692 28 14 28C14.0822 28 14.1641 27.9983 14.2461 27.9968V17.0984H11.2383V13.593H14.2461V11.0135C14.2461 8.02197 16.0724 6.39374 18.7409 6.39374C20.0188 6.39374 21.1173 6.48901 21.4375 6.53152V9.65811H19.5974C18.1456 9.65811 17.8644 10.3481 17.8644 11.3605V13.593H21.3358L20.8834 17.0984H17.8644V27.4591C23.7162 25.7815 28 20.3903 28 14Z"
                  fill="#4C4C4C"
                />
                <path
                  d="M14.925 27.9688C14.7794 27.9782 14.633 27.9857 14.4863 27.9906C14.633 27.9857 14.7794 27.9782 14.925 27.9688Z"
                  fill="white"
                />
                <path
                  d="M14.4788 27.9911C14.4014 27.9937 14.3239 27.9956 14.2463 27.9969C14.3239 27.9956 14.4014 27.9937 14.4788 27.9911Z"
                  fill="white"
                />
              </svg>
            </Link>

            <Link size="sm" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M14 0C6.2692 0 0 6.2692 0 14C0 21.7308 6.2692 28 14 28C21.7308 28 28 21.7308 28 14C28 6.2692 21.7308 0 14 0ZM21.9906 17.3144C21.9517 18.1701 21.8156 18.7544 21.6169 19.2658C21.1993 20.3457 20.3457 21.1993 19.2658 21.6169C18.7546 21.8156 18.1701 21.9515 17.3146 21.9906C16.4573 22.0297 16.1834 22.0391 14.0002 22.0391C11.8168 22.0391 11.5431 22.0297 10.6856 21.9906C9.83008 21.9515 9.24561 21.8156 8.73441 21.6169C8.19778 21.4151 7.71201 21.0987 7.31039 20.6896C6.90152 20.2882 6.58514 19.8022 6.38327 19.2658C6.1846 18.7546 6.04852 18.1701 6.00964 17.3146C5.97012 16.4571 5.96094 16.1832 5.96094 14C5.96094 11.8168 5.97012 11.5429 6.00943 10.6856C6.04831 9.82986 6.18417 9.24561 6.38284 8.73419C6.58472 8.19778 6.90131 7.71179 7.31039 7.31039C7.71179 6.90131 8.19778 6.58493 8.73419 6.38306C9.24561 6.18439 9.82986 6.04852 10.6856 6.00943C11.5429 5.97034 11.8168 5.96094 14 5.96094C16.1832 5.96094 16.4571 5.97034 17.3144 6.00964C18.1701 6.04852 18.7544 6.18439 19.2658 6.38284C19.8022 6.58472 20.2882 6.90131 20.6898 7.31039C21.0987 7.71201 21.4153 8.19778 21.6169 8.73419C21.8158 9.24561 21.9517 9.82986 21.9908 10.6856C22.0299 11.5429 22.0391 11.8168 22.0391 14C22.0391 16.1832 22.0299 16.4571 21.9906 17.3144Z"
                  fill="#4C4C4C"
                />
                <path
                  d="M16.6797 14C16.6797 15.48 15.48 16.6797 14 16.6797C12.52 16.6797 11.3203 15.48 11.3203 14C11.3203 12.52 12.52 11.3203 14 11.3203C15.48 11.3203 16.6797 12.52 16.6797 14Z"
                  fill="#4C4C4C"
                />
                <path
                  d="M20.2672 9.25879C20.1384 8.90973 19.9329 8.59378 19.6659 8.33444C19.4065 8.06741 19.0908 7.86191 18.7415 7.73309C18.4583 7.62308 18.0327 7.49213 17.2489 7.45645C16.4011 7.41779 16.1469 7.40945 14.0004 7.40945C11.8537 7.40945 11.5995 7.41757 10.7518 7.45624C9.96802 7.49213 9.54227 7.62308 9.25922 7.73309C8.90994 7.86191 8.59399 8.06741 8.33487 8.33444C8.06784 8.59378 7.86234 8.90952 7.73331 9.25879C7.62329 9.54205 7.49234 9.9678 7.45667 10.7516C7.418 11.5992 7.40967 11.8535 7.40967 14.0002C7.40967 16.1466 7.418 16.4008 7.45667 17.2487C7.49234 18.0325 7.62329 18.458 7.73331 18.7413C7.86234 19.0906 8.06763 19.4063 8.33466 19.6656C8.59399 19.9327 8.90973 20.1382 9.259 20.267C9.54227 20.3772 9.96802 20.5082 10.7518 20.5439C11.5995 20.5825 11.8535 20.5906 14.0002 20.5906C16.1471 20.5906 16.4013 20.5825 17.2487 20.5439C18.0325 20.5082 18.4583 20.3772 18.7415 20.267C19.4426 19.9966 19.9968 19.4424 20.2672 18.7413C20.3772 18.458 20.5082 18.0325 20.5441 17.2487C20.5827 16.4008 20.5909 16.1466 20.5909 14.0002C20.5909 11.8535 20.5827 11.5992 20.5441 10.7516C20.5084 9.9678 20.3774 9.54205 20.2672 9.25879ZM14.0004 18.128C11.7204 18.128 9.8721 16.2799 9.8721 13.9999C9.8721 11.7199 11.7204 9.87189 14.0004 9.87189C16.2802 9.87189 18.1284 11.7199 18.1284 13.9999C18.1284 16.2799 16.2802 18.128 14.0004 18.128ZM18.2916 10.6734C17.7589 10.6734 17.3269 10.2415 17.3269 9.70868C17.3269 9.1759 17.7589 8.74396 18.2916 8.74396C18.8244 8.74396 19.2563 9.1759 19.2563 9.70868C19.2561 10.2415 18.8244 10.6734 18.2916 10.6734Z"
                  fill="#4C4C4C"
                />
              </svg>
            </Link>

            <Link size="sm" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M12.2568 16.6227L16.8109 13.9998L12.2568 11.377V16.6227Z" fill="#4C4C4C" />
                <path
                  d="M14 0C6.2692 0 0 6.2692 0 14C0 21.7308 6.2692 28 14 28C21.7308 28 28 21.7308 28 14C28 6.2692 21.7308 0 14 0ZM22.7479 14.0143C22.7479 14.0143 22.7479 16.8536 22.3877 18.2227C22.1858 18.9721 21.5949 19.563 20.8456 19.7646C19.4764 20.125 14 20.125 14 20.125C14 20.125 8.53787 20.125 7.15445 19.7503C6.40506 19.5486 5.81418 18.9576 5.6123 18.2082C5.25192 16.8536 5.25192 14 5.25192 14C5.25192 14 5.25192 11.1609 5.6123 9.79184C5.81396 9.04245 6.41937 8.43704 7.15445 8.23538C8.52356 7.875 14 7.875 14 7.875C14 7.875 19.4764 7.875 20.8456 8.24969C21.5949 8.45135 22.1858 9.04245 22.3877 9.79184C22.7624 11.1609 22.7479 14.0143 22.7479 14.0143Z"
                  fill="#4C4C4C"
                />
              </svg>
            </Link>

            <Link size="sm" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28ZM10.8202 10.9173V20.3635H7.81356V10.9173H10.8202ZM11.018 7.9952C11.018 8.90256 10.3656 9.62688 9.3175 9.62688H9.29746C8.28816 9.62688 7.63574 8.90256 7.63574 7.9952C7.63574 7.06954 8.30819 6.36353 9.33753 6.36353C10.3669 6.36353 10.9992 7.06823 11.018 7.9952ZM15.4635 15.088V20.3635H12.4581C12.4581 20.3635 12.4957 11.8038 12.4581 10.9173H15.4635V12.2535L15.4434 12.2862H15.4635V12.2535C15.8642 11.6089 16.5792 10.6937 18.1746 10.6937C20.1531 10.6937 21.6357 12.043 21.6357 14.9455V20.3635H18.6291V15.3103C18.6291 14.0395 18.1946 13.1739 17.1064 13.1739C16.2749 13.1739 15.7803 13.7584 15.5636 14.3219C15.4835 14.5232 15.4635 14.8056 15.4635 15.088Z"
                  fill="#4C4C4C"
                />
              </svg>
            </Link>
          </Stack>

          {/* play & app store */}
          <Stack spacing={2} direction={"row"}>
            <Link href="#">
              <img className="store_img" alt="apple-store" src={appleStore} />
            </Link>
            <Link href="#">
              <img className="store_img" alt="play-store" src={playStore} />
            </Link>
          </Stack>
        </Stack>
        {/* copyright article */}
        <Typography
          variant="p"
          sx={{
            color: "#393939",
            opacity: 0.5,
            fontSize: "14px",
            fontWeight: 400,
            display: { xs: "block", md: "inline" },
            textAlign: "center",
            margin: { xs: "20px 0" },
            width: "100%",
          }}
        >
          © Boon & Bliss b.v. 2022 - Privacy statement - Terms and Conditions - Cookie Declaration
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
