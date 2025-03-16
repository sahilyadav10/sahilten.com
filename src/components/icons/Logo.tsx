"use client";
import { useTheme } from "@/context/ThemeContext";

const Logo = ({
  width = 200,
  height = 60,
}: {
  width?: number;
  height?: number;
}) => {
  const { isDarkMode } = useTheme();
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 384 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M87.4952 59.2753C87.7264 59.6509 87.8093 60.0366 87.7395 60.4373C87.6697 60.838 87.469 61.1736 87.1462 61.439C79.8966 67.3994 73.2926 73.0291 67.3254 78.3283C67.9274 80.5321 67.9972 82.9413 67.5348 85.5608C66.7758 90.1288 65.428 94.3811 63.4869 98.323C61.5545 102.26 59.2906 105.846 56.6996 109.082C54.1173 112.327 51.4129 115.117 48.5863 117.456C45.7598 119.79 43.0597 121.613 40.4905 122.926C37.93 124.233 35.7141 124.969 33.8429 125.129C33.5637 125.18 33.3063 125.21 33.0751 125.21C31.6182 125.21 30.5888 124.874 29.9869 124.208C29.3806 123.537 28.9836 122.911 28.8004 122.325C27.7274 118.944 30.2355 113.379 36.3205 105.636C42.4141 97.8872 51.6485 88.4659 64.0278 77.3666C62.4923 74.2011 59.3953 71.2861 54.7455 68.6115C50.1043 65.9268 43.9496 62.8164 36.2856 59.2753C35.4001 58.8495 34.4928 58.4238 33.5637 57.9931C32.6302 57.5523 31.6706 57.0915 30.6848 56.6107C27.3217 55.0079 24.988 52.8391 23.6882 50.0994C22.3839 47.3646 22.2225 44.2292 23.1996 40.7031C23.9412 37.9683 25.2454 35.1735 27.108 32.3286C28.9793 29.4836 31.2475 26.6587 33.9126 23.8539C36.5735 21.039 39.4698 18.3594 42.6017 15.82C45.7293 13.2705 48.9266 10.9465 52.1981 8.84788C55.4652 6.75425 58.6582 4.98118 61.777 3.53868C64.9045 2.09618 67.7878 1.08442 70.4311 0.4934C73.0701 -0.107642 75.3035 -0.15773 77.1311 0.333122C77.8727 0.548495 78.7015 0.94919 79.6087 1.53521C80.516 2.12623 81.2358 3.07788 81.7723 4.40017C82.3175 5.71245 82.4746 7.51557 82.2434 9.80955C82.1474 10.2403 81.9555 10.5709 81.6676 10.8113C81.3884 11.0517 81.0613 11.1469 80.6905 11.0918C80.3154 11.0417 80.0144 10.8413 79.7832 10.4907C79.5477 10.1451 79.4561 9.75946 79.5041 9.32871C79.7832 7.08482 79.5738 5.59224 78.8759 4.84093C78.178 4.07961 77.4103 3.59377 76.5728 3.3784C74.7931 2.89757 72.442 3.05784 69.5238 3.85923C66.6013 4.66062 63.3473 6.01797 59.753 7.92628C56.1587 9.82457 52.4685 12.1686 48.691 14.9585C44.678 17.8585 41.0707 20.8787 37.8733 24.0142C34.6716 27.1396 32.0326 30.2049 29.952 33.2101C27.88 36.2153 26.4886 39.0102 25.7819 41.5846C24.2465 47.1042 26.2356 51.1762 31.7491 53.8058C32.7262 54.2365 33.6684 54.6623 34.5757 55.088C35.483 55.5188 36.4077 55.9445 37.3499 56.3702C42.0608 58.5741 46.3399 60.6577 50.1916 62.6211C54.0388 64.5745 57.3321 66.5679 60.0671 68.6115C62.7977 70.645 64.8391 72.9189 66.1913 75.4433C72.0756 70.1842 78.5444 64.6847 85.5934 58.9547C85.9162 58.6893 86.2564 58.5941 86.6054 58.6742C86.963 58.7544 87.2597 58.9547 87.4952 59.2753ZM64.935 84.9197C65.2142 83.3169 65.236 81.8143 65.0048 80.4119C55.0595 89.3724 47.1643 97.2611 41.328 104.073C37.9169 108.09 35.2998 111.666 33.4765 114.791C31.6619 117.927 30.9378 120.091 31.3129 121.283C31.4525 121.708 31.7753 121.964 32.29 122.044C32.8134 122.124 33.2584 122.134 33.6335 122.084C35.1689 121.974 37.1056 121.303 39.4436 120.061C41.7817 118.828 44.2505 117.126 46.859 114.952C49.4762 112.788 52.0236 110.204 54.5012 107.198C56.9788 104.193 59.1467 100.812 61.0093 97.0608C62.8806 93.3043 64.1891 89.2572 64.935 84.9197Z"
        fill={isDarkMode ? "white" : "black"}
      />
      <path
        d="M114.105 59.8362C114.427 59.9964 114.65 60.2769 114.768 60.6776C114.881 61.0783 114.872 61.469 114.733 61.8396C113.847 63.9383 112.875 66.0369 111.819 68.1305C110.772 70.2141 109.673 72.1325 108.521 73.8805C107.379 75.6185 106.205 77.0059 104.997 78.0477C103.784 79.0895 102.572 79.6104 101.35 79.6104C101.115 79.6104 100.862 79.5804 100.583 79.5303C97.4506 78.8341 95.5139 74.0157 94.7724 65.0652C93.9785 66.2974 93.0538 67.6797 91.9982 69.2124C90.9513 70.735 89.8433 72.2477 88.6831 73.7403C88.4955 73.9556 88.1858 74.2962 87.7583 74.762C87.3396 75.2178 86.851 75.5784 86.2927 75.8439C85.7344 76.1144 85.176 76.0843 84.6177 75.7638C83.501 75.2829 82.9689 73.8905 83.0125 71.5765C83.0125 70.2442 83.2349 68.5863 83.6755 66.6079C84.1204 64.6194 84.7486 62.616 85.5599 60.5975C86.3712 58.584 87.3265 56.8009 88.4213 55.2482C89.5249 53.7005 90.7506 52.6587 92.1029 52.1228C92.9491 51.7371 93.9785 51.672 95.1911 51.9224C96.3994 52.1629 97.66 53.1646 98.9773 54.9276C99.2085 55.2482 99.3132 55.6239 99.2914 56.0496C99.2652 56.4803 99.1169 56.8259 98.8377 57.0914C98.5586 57.3619 98.2314 57.4821 97.8607 57.452C97.4855 57.427 97.1802 57.2517 96.9359 56.9311C95.8193 55.4385 94.8509 54.7273 94.0396 54.8074C93.2239 54.8876 92.5303 55.1681 91.9633 55.6489C90.9382 56.5054 90.0091 57.7425 89.1716 59.3553C88.3341 60.9581 87.6275 62.651 87.0604 64.4241C86.5021 66.1872 86.1051 67.84 85.8739 69.3727C85.6384 70.8953 85.5686 72.0072 85.6646 72.6984C85.8042 72.5933 85.9525 72.458 86.1182 72.2978C86.2796 72.1375 86.4541 71.9271 86.6417 71.6566C88.0462 69.8836 89.333 68.1255 90.4976 66.3875C91.6579 64.6545 92.6655 63.1118 93.5161 61.7595C93.7473 61.3888 93.9698 61.0282 94.1792 60.6776C94.3885 60.332 94.5848 60.0265 94.7724 59.756C95.1432 59.2251 95.6317 59.0648 96.238 59.2752C96.84 59.4355 97.1671 59.8912 97.2151 60.6375C97.3634 64.1236 97.6164 66.9284 97.9654 69.0521C98.3143 71.1658 98.6982 72.7485 99.1169 73.8004C99.5357 74.8422 99.9282 75.5534 100.303 75.924C100.674 76.2997 100.953 76.485 101.141 76.485C102.035 76.7004 103.461 75.6586 105.416 73.3596C107.379 71.0506 109.673 66.7832 112.29 60.5574C112.473 60.1317 112.744 59.8512 113.093 59.7159C113.442 59.5857 113.778 59.6258 114.105 59.8362Z"
        fill={isDarkMode ? "white" : "black"}
      />
      <path
        d="M144.014 59.2752C144.293 59.4906 144.476 59.8112 144.572 60.2369C144.664 60.6676 144.616 61.0683 144.432 61.439C142.186 65.5661 140.197 68.9219 138.465 71.4964C136.742 74.0759 135.259 76.0343 134.016 77.3666C132.782 78.6989 131.748 79.6105 130.91 80.0913C130.073 80.5821 129.392 80.8326 128.869 80.8326C128.354 80.8326 127.962 80.8025 127.682 80.7524C126.609 80.4169 125.82 79.6756 125.309 78.5286C124.795 77.3816 124.459 76.1945 124.297 74.9624C124.132 73.7203 124.027 72.7786 123.983 72.1375C123.887 70.2693 123.696 69.0121 123.408 68.371C123.128 67.7199 122.919 67.3893 122.779 67.3893C122.732 67.3893 122.71 67.3893 122.71 67.3893C122.103 67.3893 121.096 68.371 119.691 70.3344C118.295 72.2878 116.647 75.3531 114.753 79.5303C112.869 83.7076 110.902 89.152 108.856 95.8586C108.673 96.5498 108.245 96.9004 107.582 96.9004C107.491 96.9004 107.399 96.9004 107.303 96.9004C106.562 96.6851 106.213 96.1491 106.256 95.2977C106.304 94.3861 106.514 92.7532 106.884 90.3891C107.26 88.0351 107.766 85.2102 108.402 81.9145C109.031 78.6137 109.728 75.0375 110.496 71.1758C111.264 67.3192 112.053 63.4024 112.869 59.4355C113.693 55.4686 114.479 51.6771 115.225 48.0558C115.966 44.4395 116.642 41.1789 117.249 38.2788C117.85 35.3838 118.339 33.0648 118.714 31.3268C119.098 29.5788 119.29 28.6772 119.29 28.6221C120.359 23.6936 121.545 19.2058 122.849 15.1588C124.162 11.1117 125.458 7.86111 126.74 5.40185C128.031 2.93257 129.165 1.59025 130.143 1.37487C130.932 1.21459 131.538 1.48506 131.957 2.17626C132.607 3.24812 132.55 5.48199 131.783 8.88789C131.015 12.2938 129.61 16.6013 127.578 21.8103C125.554 27.0093 122.976 32.8194 119.848 39.2405C119.011 43.2625 118.086 47.6651 117.074 52.4434C116.071 57.2116 115.089 62.01 114.125 66.8283C113.17 71.6517 112.298 76.0994 111.508 80.1714C112.773 77.1262 114.073 74.3714 115.399 71.8971C116.725 69.4278 118.051 67.5095 119.377 66.1471C120.712 64.7848 121.964 64.1837 123.128 64.344C124.162 64.5043 124.926 65.0953 125.414 66.1071C125.903 67.1238 126.225 68.2107 126.391 69.3727C126.553 70.5247 126.635 71.3662 126.635 71.8971C126.775 73.8906 127.006 75.3381 127.333 76.2446C127.656 77.1562 127.988 77.637 128.328 77.6871C128.42 77.7372 128.734 77.6771 129.27 77.4868C129.802 77.3015 130.596 76.7004 131.643 75.6837C132.69 74.6569 134.077 72.8988 135.813 70.4145C137.545 67.9202 139.643 64.364 142.112 59.7561C142.295 59.4355 142.574 59.2251 142.949 59.1149C143.333 59.0098 143.686 59.0649 144.014 59.2752ZM129.654 5.86265C128.86 7.21499 127.796 9.58911 126.461 12.995C125.135 16.4009 123.791 21.0239 122.431 26.859C124.812 21.4497 126.553 17.002 127.647 13.5159C128.751 10.0299 129.418 7.48045 129.654 5.86265Z"
        fill={isDarkMode ? "white" : "black"}
      />
      <path
        d="M161.514 59.3554C161.837 59.5708 162.037 59.8913 162.107 60.3171C162.177 60.7478 162.116 61.1485 161.933 61.5192C161.047 63.137 159.926 64.9401 158.565 66.9285C157.213 68.907 155.743 70.7952 154.151 72.5984C152.568 74.3915 150.993 75.874 149.423 77.0461C147.861 78.2181 146.43 78.8091 145.13 78.8091C144.572 78.8091 144.083 78.6989 143.665 78.4886C142.068 77.6872 141.191 75.7438 141.03 72.6585C140.869 69.5731 141.414 65.2206 142.67 59.5958C142.762 59.1701 142.971 58.8495 143.298 58.6342C143.634 58.4238 143.966 58.3687 144.293 58.4739C144.664 58.5841 144.943 58.8245 145.13 59.1951C145.314 59.5708 145.362 59.9464 145.27 60.3171C144.524 63.753 144.057 66.4778 143.874 68.4912C143.687 70.4947 143.652 72.0073 143.769 73.0191C143.883 74.0359 144.057 74.722 144.293 75.0827C144.524 75.4333 144.664 75.6036 144.712 75.6036C145.314 75.9241 146.199 75.6987 147.364 74.9224C148.537 74.136 149.846 72.979 151.289 71.4564C152.729 69.9337 154.186 68.1657 155.651 66.1472C157.126 64.1337 158.452 62.03 159.63 59.8362C159.861 59.4656 160.153 59.2352 160.502 59.1551C160.851 59.0749 161.187 59.145 161.514 59.3554ZM144.991 52.9243C144.057 52.8742 143.582 52.5636 143.56 52.0027C143.534 51.4317 143.743 50.8507 144.188 50.2597C144.629 49.6736 145.082 49.2729 145.549 49.0576C146.291 48.7921 146.84 48.8472 147.189 49.2178C147.538 49.5935 147.7 50.0743 147.678 50.6603C147.652 51.2514 147.42 51.7923 146.98 52.2832C146.535 52.764 145.872 52.9794 144.991 52.9243Z"
        fill={isDarkMode ? "white" : "black"}
      />
      <path
        d="M179.303 2.33645C179.905 3.35322 179.918 5.41679 179.338 8.52718C178.753 11.6426 177.549 15.4892 175.726 20.0672C173.911 24.6501 171.486 29.7339 168.45 35.3136C168.402 35.3687 168.354 35.4238 168.31 35.4739C167.098 41.1537 165.894 46.9438 164.699 52.844C163.512 58.7342 162.378 64.5242 161.296 70.2141C160.223 75.8939 159.246 81.2332 158.365 86.2419C157.484 91.2606 156.725 95.7283 156.097 99.6451C155.46 103.557 154.998 106.687 154.719 109.041C154.767 109.041 154.815 109.041 154.858 109.041C155.233 109.212 155.499 109.487 155.661 109.863C155.826 110.233 155.835 110.634 155.696 111.065C155.373 112.077 155.033 112.998 154.684 113.83C154.335 114.671 153.859 115.092 153.253 115.092C153.113 115.092 152.952 115.057 152.764 114.992C152.346 114.831 152.045 114.496 151.857 113.99C151.674 113.479 151.648 112.457 151.787 110.925C151.927 109.402 152.232 107.063 152.695 103.912C153.532 98.1124 154.797 90.5543 156.481 81.2332C157.693 74.6919 158.958 68.0253 160.284 61.2385C161.619 54.4568 162.941 47.9154 164.245 41.6245C165.545 35.3236 166.81 29.5987 168.031 24.4548C168.263 23.428 168.611 22.0055 169.078 20.1874C169.541 18.3742 170.077 16.4159 170.683 14.3172C171.298 12.2236 171.979 10.2101 172.725 8.28677C173.466 6.35342 174.234 4.75565 175.028 3.49847C175.831 2.2463 176.624 1.53506 177.418 1.37479C178.208 1.21451 178.836 1.53506 179.303 2.33645ZM170.753 24.6952C172.995 19.8769 174.574 15.8549 175.482 12.6343C176.398 9.41873 176.93 7.07967 177.069 5.62215C176.406 6.70402 175.516 8.73755 174.4 11.7127C173.283 14.6778 172.066 19.0053 170.753 24.6952Z"
        fill={isDarkMode ? "white" : "black"}
      />
      <path
        d="M258.802 53.966C258.942 54.3417 258.942 54.7273 258.802 55.128C258.663 55.5287 258.423 55.8092 258.087 55.9695C255.339 57.2667 252.718 58.584 250.218 59.9163C247.714 61.2537 245.32 62.5709 243.03 63.8632C239.527 81.1732 235.187 95.6182 230.013 107.198C226.232 115.718 222.166 122.39 217.817 127.213C213.477 132.046 209.255 134.596 205.15 134.866C204.915 134.916 204.683 134.946 204.452 134.946C202.018 134.946 199.951 134.095 198.241 132.402C196.54 130.719 195.388 128.375 194.786 125.37C194.228 122.59 194.25 119.349 194.856 115.653C195.458 111.952 196.762 107.925 198.764 103.572C200.775 99.2295 203.602 94.7166 207.244 90.0285C210.882 85.3404 215.471 80.5972 221.01 75.8039C226.546 70.9955 233.119 66.3174 240.726 61.7595C243.575 47.3896 245.769 31.467 247.304 13.9967C247.444 12.434 247.535 11.0917 247.583 9.96977C247.208 10.8813 246.816 11.9031 246.397 13.0351C245.978 14.157 245.56 15.279 245.141 16.4009C243.976 19.4612 242.633 22.9322 241.11 26.819C239.597 30.7057 237.904 34.6726 236.033 38.7196C234.157 42.7666 232.133 46.6283 229.961 50.2997C227.798 53.976 225.499 57.1265 223.069 59.7561C217.006 66.3024 212.182 68.9019 208.587 67.5496C207.737 67.2841 206.847 66.6179 205.918 65.5461C204.984 64.4792 204.286 62.6811 203.824 60.1568C203.44 57.8477 203.362 55.1681 203.597 52.1228C203.842 49.0675 204.356 45.862 205.15 42.5062C205.94 39.1553 206.987 35.8296 208.291 32.5289C209.604 29.2332 211.143 26.1378 212.914 23.2528C214.694 20.3578 216.657 17.8584 218.812 15.7598C219.091 15.4943 219.414 15.3741 219.789 15.3992C220.16 15.4292 220.461 15.5995 220.696 15.9201C220.927 16.2406 221.032 16.6213 221.01 17.0621C220.984 17.4928 220.836 17.8384 220.557 18.1039C218.589 20.0272 216.788 22.3312 215.148 25.0158C213.516 27.7005 212.086 30.6005 210.856 33.7109C209.621 36.8113 208.605 39.9317 207.802 43.0671C207.008 46.2076 206.498 49.2128 206.267 52.0828C206.031 54.9427 206.101 57.4471 206.476 59.5958C206.659 60.5574 206.965 61.5692 207.383 62.621C207.802 63.6628 208.483 64.344 209.425 64.6646C209.887 64.8248 210.611 64.8248 211.588 64.6646C212.565 64.5043 213.83 63.8932 215.392 62.8214C216.962 61.7395 218.89 59.9664 221.185 57.4921C223.523 54.9828 225.739 51.9425 227.832 48.3763C229.935 44.8102 231.898 41.0436 233.712 37.0767C235.536 33.1099 237.206 29.2231 238.72 25.4165C240.242 21.6099 241.564 18.204 242.681 15.1988C243.902 11.9833 244.862 9.529 245.56 7.84609C246.257 6.15315 246.851 5.01117 247.339 4.42015C247.828 3.83413 248.377 3.64881 248.997 3.85918C249.507 4.01945 249.878 4.39511 250.113 4.98112C250.345 5.57214 250.436 6.59392 250.393 8.04643C250.345 9.48893 250.205 11.5826 249.974 14.3173C248.517 30.881 246.467 46.1074 243.815 59.9965C245.86 58.8244 247.993 57.6624 250.218 56.5104C252.438 55.3484 254.711 54.2365 257.04 53.1646C257.363 53.0044 257.703 53.0044 258.052 53.1646C258.41 53.3249 258.663 53.5954 258.802 53.966ZM227.623 105.756C232.439 94.9771 236.526 81.654 239.889 65.7865C231.523 70.9855 224.762 76.0593 219.597 81.0129C214.441 85.9815 210.463 90.3942 207.663 94.2558C203.65 99.7153 200.727 105.14 198.904 110.524C197.089 115.918 196.601 120.652 197.438 124.729C197.901 127.093 198.786 128.901 200.09 130.158C201.403 131.41 203.021 131.961 204.941 131.801C207.37 131.641 209.879 130.484 212.461 128.335C215.052 126.196 217.647 123.226 220.243 119.419C222.834 115.613 225.294 111.055 227.623 105.756Z"
        fill={isDarkMode ? "white" : "black"}
      />
      <path
        d="M286.601 59.8362C286.924 59.9964 287.146 60.2769 287.264 60.6776C287.377 61.0783 287.368 61.469 287.229 61.8396C286.343 63.9383 285.371 66.0369 284.315 68.1305C283.268 70.2141 282.169 72.1325 281.017 73.8805C279.875 75.6185 278.701 77.0059 277.493 78.0477C276.28 79.0895 275.068 79.6104 273.846 79.6104C273.611 79.6104 273.358 79.5804 273.079 79.5303C269.947 78.8341 268.01 74.0157 267.268 65.0652C266.475 66.2974 265.55 67.6797 264.494 69.2124C263.447 70.735 262.339 72.2477 261.179 73.7403C260.992 73.9556 260.682 74.2962 260.254 74.762C259.836 75.2178 259.347 75.5784 258.789 75.8439C258.23 76.1144 257.672 76.0843 257.114 75.7638C255.997 75.2829 255.465 73.8905 255.509 71.5765C255.509 70.2442 255.731 68.5863 256.172 66.6079C256.617 64.6194 257.245 62.616 258.056 60.5975C258.867 58.584 259.823 56.8009 260.917 55.2482C262.021 53.7005 263.247 52.6587 264.599 52.1228C265.445 51.7371 266.475 51.672 267.687 51.9224C268.895 52.1629 270.156 53.1646 271.473 54.9276C271.705 55.2482 271.809 55.6239 271.787 56.0496C271.761 56.4803 271.613 56.8259 271.334 57.0914C271.055 57.3619 270.728 57.4821 270.357 57.452C269.982 57.427 269.676 57.2517 269.432 56.9311C268.315 55.4385 267.347 54.7273 266.536 54.8074C265.72 54.8876 265.026 55.1681 264.459 55.6489C263.434 56.5054 262.505 57.7425 261.668 59.3553C260.83 60.9581 260.124 62.651 259.556 64.4241C258.998 66.1872 258.601 67.84 258.37 69.3727C258.134 70.8953 258.065 72.0072 258.161 72.6984C258.3 72.5933 258.449 72.458 258.614 72.2978C258.776 72.1375 258.95 71.9271 259.138 71.6566C260.542 69.8836 261.829 68.1255 262.994 66.3875C264.154 64.6545 265.162 63.1118 266.012 61.7595C266.243 61.3888 266.466 61.0282 266.675 60.6776C266.885 60.332 267.081 60.0265 267.268 59.756C267.639 59.2251 268.128 59.0648 268.734 59.2752C269.336 59.4355 269.663 59.8912 269.711 60.6375C269.859 64.1236 270.112 66.9284 270.461 69.0521C270.81 71.1658 271.194 72.7485 271.613 73.8004C272.032 74.8422 272.424 75.5534 272.799 75.924C273.17 76.2997 273.449 76.485 273.637 76.485C274.531 76.7004 275.958 75.6586 277.912 73.3596C279.875 71.0506 282.169 66.7832 284.786 60.5574C284.969 60.1317 285.24 59.8512 285.589 59.7159C285.938 59.5857 286.274 59.6258 286.601 59.8362Z"
        fill={isDarkMode ? "white" : "black"}
      />
      <path
        d="M313.212 10.5308C313.351 10.6409 313.491 10.9014 313.631 11.3121C313.77 11.7128 313.84 12.409 313.84 13.3957C313.84 14.3874 313.652 15.8349 313.282 17.7433C312.907 19.6415 312.278 22.1709 311.397 25.3364C311.258 25.7672 311.127 26.2079 311.013 26.6587C310.896 27.1145 310.76 27.5553 310.612 27.981C309.539 31.8427 308.231 36.1752 306.686 40.9835C305.151 45.7819 303.075 51.0159 300.457 56.6908C299.851 60.1768 299.223 63.8932 298.573 67.8301C297.919 71.7719 297.269 75.9391 296.619 80.3317C295.768 86.2871 295.101 91.1956 294.612 95.0573C294.124 98.9139 293.784 101.979 293.6 104.253C293.413 106.537 293.295 108.27 293.251 109.462C293.622 109.287 293.993 109.287 294.368 109.462C294.691 109.673 294.913 109.983 295.031 110.384C295.145 110.785 295.136 111.17 294.996 111.546C294.761 112.132 294.438 112.788 294.019 113.509C293.6 114.23 293.086 114.591 292.484 114.591C292.296 114.591 292.109 114.561 291.925 114.511C291.459 114.351 291.105 113.96 290.861 113.349C290.626 112.733 290.521 111.551 290.547 109.803C290.569 108.065 290.774 105.425 291.158 101.889C291.716 96.3194 292.645 88.9717 293.949 79.8509C294.691 74.8723 295.467 70.0239 296.27 65.3057C295.559 66.5879 294.822 67.9052 294.054 69.2525C293.286 70.5898 292.484 71.9522 291.646 73.3396C290.377 75.4933 289.23 77.006 288.209 77.8875C287.184 78.769 286.281 79.2348 285.505 79.2899C284.737 79.34 284.096 79.2098 283.585 78.8892C282.565 78.193 281.91 76.9659 281.631 75.2028C281.352 73.4298 281.387 71.4313 281.736 69.2125C282.085 66.9836 282.656 64.8449 283.446 62.8013C285.086 58.8345 286.962 56.0396 289.081 54.4068C291.21 52.779 293.016 52.203 294.508 52.6838C294.831 52.8441 295.345 53.2047 296.043 53.7657C296.75 54.3267 297.177 55.3835 297.317 56.9312C297.548 56.5054 297.757 56.0797 297.945 55.649C299.664 46.433 301.365 38.4892 303.04 31.8076C304.723 25.1311 306.303 19.927 307.768 16.2006C309.243 12.4741 310.499 10.4256 311.537 10.0499C312.187 9.78446 312.745 9.94474 313.212 10.5308ZM289.465 71.5766C290.591 69.6933 291.655 67.8451 292.658 66.0269C293.657 64.1988 294.599 62.4007 295.485 60.6376C294.787 60.3721 294.508 59.8362 294.647 59.0348C294.647 58.6642 294.634 58.0631 294.612 57.2317C294.586 56.3902 294.298 55.8643 293.74 55.649C293.644 55.5989 293.504 55.5688 293.321 55.5688C292.436 55.5688 291.28 56.27 289.849 57.6725C288.427 59.0649 287.114 61.2336 285.906 64.1837C285.103 66.1071 284.584 67.9453 284.353 69.6933C284.118 71.4313 284.074 72.8938 284.213 74.0809C284.353 75.2579 284.606 75.9541 284.981 76.1645C285.121 76.2747 285.561 76.0844 286.307 75.6035C287.062 75.1227 288.113 73.7804 289.465 71.5766ZM308.798 24.3747C309.356 22.4915 309.783 20.8687 310.089 19.5063C310.39 18.144 310.638 16.9769 310.839 16.0002C309.94 18.0989 308.859 21.2644 307.594 25.4967C306.337 29.734 304.963 35.1735 303.476 41.825C304.453 39.0903 305.299 36.4907 306.023 34.0315C306.756 31.5622 307.424 29.2532 308.03 27.0995C308.169 26.6186 308.296 26.1528 308.414 25.697C308.527 25.2463 308.658 24.8055 308.798 24.3747Z"
        fill={isDarkMode ? "white" : "black"}
      />
      <path
        d="M334.575 59.8362C334.897 59.9964 335.12 60.2769 335.238 60.6776C335.351 61.0783 335.342 61.469 335.203 61.8396C334.317 63.9383 333.345 66.0369 332.289 68.1305C331.242 70.2141 330.143 72.1325 328.991 73.8805C327.848 75.6185 326.675 77.0059 325.467 78.0477C324.254 79.0895 323.042 79.6104 321.82 79.6104C321.585 79.6104 321.332 79.5804 321.053 79.5303C317.921 78.8341 315.984 74.0157 315.242 65.0652C314.448 66.2974 313.524 67.6797 312.468 69.2124C311.421 70.735 310.313 72.2477 309.153 73.7403C308.965 73.9556 308.656 74.2962 308.228 74.762C307.81 75.2178 307.321 75.5784 306.763 75.8439C306.204 76.1144 305.646 76.0843 305.088 75.7638C303.971 75.2829 303.439 73.8905 303.482 71.5765C303.482 70.2442 303.705 68.5863 304.145 66.6079C304.59 64.6194 305.219 62.616 306.03 60.5975C306.841 58.584 307.796 56.8009 308.891 55.2482C309.995 53.7005 311.221 52.6587 312.573 52.1228C313.419 51.7371 314.448 51.672 315.661 51.9224C316.869 52.1629 318.13 53.1646 319.447 54.9276C319.678 55.2482 319.783 55.6239 319.761 56.0496C319.735 56.4803 319.587 56.8259 319.308 57.0914C319.029 57.3619 318.701 57.4821 318.331 57.452C317.956 57.427 317.65 57.2517 317.406 56.9311C316.289 55.4385 315.321 54.7273 314.51 54.8074C313.694 54.8876 313 55.1681 312.433 55.6489C311.408 56.5054 310.479 57.7425 309.642 59.3553C308.804 60.9581 308.097 62.651 307.53 64.4241C306.972 66.1872 306.575 67.84 306.344 69.3727C306.108 70.8953 306.039 72.0072 306.135 72.6984C306.274 72.5933 306.422 72.458 306.588 72.2978C306.75 72.1375 306.924 71.9271 307.112 71.6566C308.516 69.8836 309.803 68.1255 310.968 66.3875C312.128 64.6545 313.136 63.1118 313.986 61.7595C314.217 61.3888 314.44 61.0282 314.649 60.6776C314.859 60.332 315.055 60.0265 315.242 59.756C315.613 59.2251 316.102 59.0648 316.708 59.2752C317.31 59.4355 317.637 59.8912 317.685 60.6375C317.833 64.1236 318.086 66.9284 318.435 69.0521C318.784 71.1658 319.168 72.7485 319.587 73.8004C320.006 74.8422 320.398 75.5534 320.773 75.924C321.144 76.2997 321.423 76.485 321.611 76.485C322.505 76.7004 323.931 75.6586 325.886 73.3596C327.848 71.0506 330.143 66.7832 332.76 60.5574C332.943 60.1317 333.214 59.8512 333.563 59.7159C333.912 59.5857 334.247 59.6258 334.575 59.8362Z"
        fill={isDarkMode ? "white" : "black"}
      />
      <path
        d="M366.438 60.1567C366.76 60.4272 366.935 60.7728 366.961 61.1985C366.983 61.6293 366.878 61.9999 366.647 62.3205C364.876 64.6846 362.848 66.3875 360.558 67.4293C358.263 68.4711 356.095 68.6715 354.05 68.0304C351.664 67.3392 349.814 65.6462 348.501 62.9616C347.337 67.6397 345.561 72.2276 343.18 76.7254C341.596 79.7807 339.987 82.3151 338.347 84.3186C336.715 86.3321 335.25 87.5843 333.95 88.0651C333.47 88.2254 333.025 88.3055 332.606 88.3055C332.091 88.3055 331.664 88.1853 331.315 87.9449C330.966 87.7045 330.7 87.5041 330.512 87.3438C330.329 87.0734 330.085 86.6527 329.78 86.0817C329.479 85.5207 329.269 84.6091 329.152 83.3569C329.038 82.0998 329.095 80.2916 329.326 77.9275C329.562 75.5634 330.085 72.4931 330.896 68.7116C331.708 64.935 332.938 60.2569 334.578 54.6872C334.669 54.3166 334.892 54.0361 335.241 53.8458C335.59 53.6605 335.926 53.6204 336.253 53.7256C336.624 53.8859 336.89 54.1563 337.055 54.527C337.217 54.9026 337.23 55.3033 337.09 55.7291C335.647 60.7678 334.534 65.0151 333.758 68.4711C332.99 71.9321 332.467 74.752 332.187 76.9258C331.908 79.0895 331.777 80.7424 331.804 81.8944C331.825 83.0564 331.917 83.8628 332.083 84.3186C332.244 84.7694 332.349 85.0248 332.397 85.0799C332.44 85.13 332.502 85.1701 332.571 85.2001C332.641 85.2252 332.816 85.1851 333.095 85.0799C334.081 84.7043 335.276 83.6174 336.672 81.8143C338.067 80.0212 339.472 77.7773 340.894 75.0826C342.325 72.3729 343.572 69.4629 344.645 66.3475C345.727 63.2371 346.451 60.1768 346.826 57.1716C346.918 56.3201 347.358 55.8643 348.152 55.8092C348.907 55.8092 349.356 56.2399 349.496 57.0914C350.237 61.6092 351.991 64.2638 354.748 65.0652C356.283 65.5461 357.945 65.3607 359.738 64.5043C361.539 63.6378 363.144 62.2403 364.553 60.317C364.833 59.9965 365.147 59.8262 365.496 59.7961C365.844 59.7711 366.159 59.8913 366.438 60.1567Z"
        fill={isDarkMode ? "white" : "black"}
      />
      <path d="M2 104.827H381.422" stroke="#8C52FF" strokeWidth="4" />
      <path d="M2 8.66504V106.535" stroke="#8C52FF" strokeWidth="4" />
      <path d="M2 10.3379H381.422" stroke="#8C52FF" strokeWidth="4" />
      <path
        d="M381.418 8.66504L381.418 106.535"
        stroke="#8C52FF"
        strokeWidth="4"
      />
    </svg>
  );
};

export default Logo;
