// to update
const NOTIFICATION_TYPES = {
  FORK: "fork",
  REPLY: "reply",
  FOLLOW: "follow",
  LIKE: "like",
  MENTION: "mention",
  POKE: "poke",
};

// to update
const icons = {
  [NOTIFICATION_TYPES.LIKE]: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9062 2.5C12.293 2.5 10.8805 3.19375 10 4.36641C9.11953 3.19375 7.70703 2.5 6.09375 2.5C4.80955 2.50145 3.57837 3.01223 2.6703 3.9203C1.76223 4.82837 1.25145 6.05955 1.25 7.34375C1.25 12.8125 9.35859 17.2391 9.70391 17.4219C9.79492 17.4708 9.89665 17.4965 10 17.4965C10.1033 17.4965 10.2051 17.4708 10.2961 17.4219C10.6414 17.2391 18.75 12.8125 18.75 7.34375C18.7486 6.05955 18.2378 4.82837 17.3297 3.9203C16.4216 3.01223 15.1904 2.50145 13.9062 2.5ZM10 16.1563C8.57344 15.325 2.5 11.5383 2.5 7.34375C2.50124 6.39101 2.88026 5.47765 3.55396 4.80396C4.22765 4.13026 5.14101 3.75124 6.09375 3.75C7.61328 3.75 8.88906 4.55938 9.42188 5.85938C9.46896 5.97401 9.54907 6.07205 9.65201 6.14105C9.75494 6.21005 9.87607 6.2469 10 6.2469C10.1239 6.2469 10.2451 6.21005 10.348 6.14105C10.4509 6.07205 10.531 5.97401 10.5781 5.85938C11.1109 4.55703 12.3867 3.75 13.9062 3.75C14.859 3.75124 15.7724 4.13026 16.446 4.80396C17.1197 5.47765 17.4988 6.39101 17.5 7.34375C17.5 11.532 11.425 15.3242 10 16.1563Z"
        fill="#868682"
      />
    </svg>
  ),
  [NOTIFICATION_TYPES.FOLLOW]: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 10.625C20 10.7908 19.9341 10.9497 19.8169 11.067C19.6997 11.1842 19.5408 11.25 19.375 11.25H18.125V12.5C18.125 12.6658 18.0591 12.8247 17.9419 12.942C17.8247 13.0592 17.6658 13.125 17.5 13.125C17.3342 13.125 17.1753 13.0592 17.0581 12.942C16.9408 12.8247 16.875 12.6658 16.875 12.5V11.25H15.625C15.4592 11.25 15.3003 11.1842 15.1831 11.067C15.0658 10.9497 15 10.7908 15 10.625C15 10.4593 15.0658 10.3003 15.1831 10.1831C15.3003 10.0659 15.4592 10 15.625 10H16.875V8.75001C16.875 8.58425 16.9408 8.42528 17.0581 8.30807C17.1753 8.19086 17.3342 8.12501 17.5 8.12501C17.6658 8.12501 17.8247 8.19086 17.9419 8.30807C18.0591 8.42528 18.125 8.58425 18.125 8.75001V10H19.375C19.5408 10 19.6997 10.0659 19.8169 10.1831C19.9341 10.3003 20 10.4593 20 10.625ZM15.4789 15.2227C15.5856 15.3497 15.6375 15.5139 15.6231 15.6791C15.6088 15.8444 15.5294 15.9972 15.4023 16.1039C15.2753 16.2106 15.1111 16.2625 14.9459 16.2481C14.7806 16.2338 14.6278 16.1544 14.5211 16.0274C12.9492 14.1555 10.7883 13.125 8.4375 13.125C6.08671 13.125 3.92578 14.1555 2.3539 16.0274C2.24719 16.1543 2.09444 16.2336 1.92925 16.2479C1.76405 16.2622 1.59995 16.2102 1.47304 16.1035C1.34613 15.9968 1.26681 15.8441 1.25252 15.6789C1.23824 15.5137 1.29016 15.3496 1.39687 15.2227C2.56406 13.8336 4.01562 12.8469 5.6289 12.3188C4.64914 11.7085 3.89478 10.7958 3.47994 9.71866C3.06511 8.64153 3.01238 7.45858 3.32972 6.3488C3.64707 5.23903 4.31722 4.2628 5.2388 3.56781C6.16038 2.87282 7.28324 2.49689 8.4375 2.49689C9.59176 2.49689 10.7146 2.87282 11.6362 3.56781C12.5578 4.2628 13.2279 5.23903 13.5453 6.3488C13.8626 7.45858 13.8099 8.64153 13.395 9.71866C12.9802 10.7958 12.2259 11.7085 11.2461 12.3188C12.8594 12.8469 14.3109 13.8336 15.4789 15.2227ZM8.4375 11.875C9.24098 11.875 10.0264 11.6368 10.6945 11.1904C11.3626 10.744 11.8833 10.1095 12.1908 9.36716C12.4982 8.62484 12.5787 7.808 12.4219 7.01996C12.2652 6.23191 11.8783 5.50804 11.3101 4.93989C10.742 4.37174 10.0181 3.98482 9.23005 3.82807C8.442 3.67132 7.62517 3.75177 6.88284 4.05925C6.14052 4.36673 5.50604 4.88743 5.05965 5.55551C4.61326 6.22358 4.375 7.00903 4.375 7.81251C4.37624 8.88957 4.80465 9.92216 5.56624 10.6838C6.32784 11.4454 7.36043 11.8738 8.4375 11.875Z"
        fill="#868682"
      />
    </svg>
  ),
  [NOTIFICATION_TYPES.REPLY]: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5672 8.30861L12.3172 2.05861C12.2298 1.97115 12.1185 1.91156 11.9973 1.88738C11.876 1.8632 11.7503 1.87551 11.6361 1.92276C11.5219 1.97001 11.4242 2.05007 11.3555 2.15282C11.2868 2.25557 11.2501 2.3764 11.25 2.50002V5.65236C9.22344 5.8258 6.98515 6.81799 5.14375 8.3797C2.92656 10.261 1.54609 12.6852 1.25625 15.2055C1.2336 15.4014 1.27333 15.5995 1.36978 15.7716C1.46624 15.9436 1.6145 16.0809 1.79348 16.1638C1.97246 16.2467 2.17302 16.2711 2.36664 16.2334C2.56026 16.1957 2.73705 16.0979 2.87187 15.9539C3.73125 15.0391 6.78906 12.1461 11.25 11.8914V15C11.2501 15.1236 11.2868 15.2445 11.3555 15.3472C11.4242 15.45 11.5219 15.53 11.6361 15.5773C11.7503 15.6245 11.876 15.6368 11.9973 15.6127C12.1185 15.5885 12.2298 15.5289 12.3172 15.4414L18.5672 9.19142C18.6841 9.07426 18.7497 8.91551 18.7497 8.75002C18.7497 8.58452 18.6841 8.42578 18.5672 8.30861ZM12.5 13.4914V11.25C12.5 11.0843 12.4342 10.9253 12.3169 10.8081C12.1997 10.6909 12.0408 10.625 11.875 10.625C9.68125 10.625 7.54453 11.1977 5.52422 12.3281C4.49527 12.9064 3.53657 13.6017 2.66719 14.4C3.12031 12.5375 4.2625 10.7664 5.95234 9.33283C7.7664 7.79455 9.98047 6.87502 11.875 6.87502C12.0408 6.87502 12.1997 6.80917 12.3169 6.69196C12.4342 6.57475 12.5 6.41578 12.5 6.25002V4.00939L17.2414 8.75002L12.5 13.4914Z"
        fill="#868682"
      />
    </svg>
  ),
  [NOTIFICATION_TYPES.FORK]: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 4.99999C17.4998 4.53246 17.3684 4.07437 17.1209 3.67773C16.8734 3.28109 16.5196 2.96181 16.0998 2.75614C15.6799 2.55047 15.2108 2.46666 14.7457 2.51422C14.2806 2.56179 13.8381 2.73882 13.4686 3.02521C13.099 3.31161 12.8172 3.69589 12.6551 4.13442C12.493 4.57295 12.4571 5.04814 12.5515 5.50605C12.6459 5.96395 12.8668 6.3862 13.1891 6.72485C13.5115 7.06351 13.9223 7.30499 14.375 7.42187V8.12499C14.375 8.45651 14.2433 8.77446 14.0089 9.00888C13.7745 9.2433 13.4565 9.37499 13.125 9.37499H6.87501C6.54349 9.37499 6.22554 9.2433 5.99112 9.00888C5.7567 8.77446 5.62501 8.45651 5.62501 8.12499V7.42187C6.21417 7.26975 6.72762 6.90797 7.06913 6.40436C7.41064 5.90075 7.55675 5.28988 7.48008 4.68624C7.40341 4.08261 7.10922 3.52766 6.65265 3.12542C6.19609 2.72317 5.60849 2.50125 5.00001 2.50125C4.39152 2.50125 3.80393 2.72317 3.34736 3.12542C2.89079 3.52766 2.5966 4.08261 2.51993 4.68624C2.44326 5.28988 2.58937 5.90075 2.93088 6.40436C3.27239 6.90797 3.78584 7.26975 4.37501 7.42187V8.12499C4.37501 8.78803 4.6384 9.42392 5.10724 9.89276C5.57608 10.3616 6.21196 10.625 6.87501 10.625H9.37501V12.5781C8.78584 12.7302 8.27239 13.092 7.93088 13.5956C7.58937 14.0992 7.44326 14.7101 7.51993 15.3137C7.5966 15.9174 7.89079 16.4723 8.34736 16.8746C8.80393 17.2768 9.39152 17.4987 10 17.4987C10.6085 17.4987 11.1961 17.2768 11.6527 16.8746C12.1092 16.4723 12.4034 15.9174 12.4801 15.3137C12.5568 14.7101 12.4106 14.0992 12.0691 13.5956C11.7276 13.092 11.2142 12.7302 10.625 12.5781V10.625H13.125C13.788 10.625 14.4239 10.3616 14.8928 9.89276C15.3616 9.42392 15.625 8.78803 15.625 8.12499V7.42187C16.1615 7.28253 16.6365 6.96919 16.9758 6.53093C17.3151 6.09267 17.4995 5.55424 17.5 4.99999ZM3.75001 4.99999C3.75001 4.75277 3.82332 4.51109 3.96067 4.30553C4.09802 4.09997 4.29324 3.93975 4.52165 3.84514C4.75006 3.75053 5.00139 3.72578 5.24387 3.77401C5.48635 3.82224 5.70907 3.94129 5.88389 4.11611C6.0587 4.29092 6.17776 4.51365 6.22599 4.75613C6.27422 4.99861 6.24946 5.24994 6.15486 5.47835C6.06025 5.70675 5.90003 5.90198 5.69447 6.03933C5.48891 6.17668 5.24723 6.24999 5.00001 6.24999C4.66849 6.24999 4.35054 6.1183 4.11612 5.88388C3.8817 5.64946 3.75001 5.33151 3.75001 4.99999ZM11.25 15C11.25 15.2472 11.1767 15.4889 11.0393 15.6945C10.902 15.9 10.7068 16.0602 10.4784 16.1548C10.25 16.2495 9.99862 16.2742 9.75614 16.226C9.51367 16.1777 9.29094 16.0587 9.11612 15.8839C8.94131 15.7091 8.82226 15.4863 8.77402 15.2439C8.72579 15.0014 8.75055 14.75 8.84516 14.5216C8.93977 14.2932 9.09998 14.098 9.30554 13.9607C9.5111 13.8233 9.75278 13.75 10 13.75C10.3315 13.75 10.6495 13.8817 10.8839 14.1161C11.1183 14.3505 11.25 14.6685 11.25 15ZM15 6.24999C14.7528 6.24999 14.5111 6.17668 14.3055 6.03933C14.1 5.90198 13.9398 5.70675 13.8452 5.47835C13.7505 5.24994 13.7258 4.99861 13.774 4.75613C13.8223 4.51365 13.9413 4.29092 14.1161 4.11611C14.2909 3.94129 14.5137 3.82224 14.7561 3.77401C14.9986 3.72578 15.25 3.75053 15.4784 3.84514C15.7068 3.93975 15.902 4.09997 16.0393 4.30553C16.1767 4.51109 16.25 4.75277 16.25 4.99999C16.25 5.33151 16.1183 5.64946 15.8839 5.88388C15.6495 6.1183 15.3315 6.24999 15 6.24999Z"
        fill="#868682"
      />
    </svg>
  ),
  [NOTIFICATION_TYPES.MENTION]: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1.875C7.84512 1.875 5.77849 2.73102 4.25476 4.25476C2.73102 5.77849 1.875 7.84512 1.875 10C1.875 12.1549 2.73102 14.2215 4.25476 15.7452C5.77849 17.269 7.84512 18.125 10 18.125C11.6805 18.125 13.4453 17.6187 14.7211 16.7711C14.7895 16.7256 14.8482 16.6672 14.894 16.599C14.9398 16.5309 14.9717 16.4543 14.9879 16.3739C15.0041 16.2934 15.0043 16.2105 14.9885 16.1299C14.9727 16.0493 14.9412 15.9727 14.8957 15.9043C14.8503 15.8359 14.7918 15.7772 14.7236 15.7314C14.6555 15.6856 14.579 15.6537 14.4985 15.6375C14.418 15.6213 14.3351 15.6211 14.2545 15.6369C14.1739 15.6527 14.0973 15.6842 14.0289 15.7297C12.9688 16.4359 11.4227 16.875 10 16.875C8.64025 16.875 7.31104 16.4718 6.18045 15.7164C5.04987 14.9609 4.16868 13.8872 3.64833 12.6309C3.12798 11.3747 2.99183 9.99237 3.2571 8.65875C3.52237 7.32513 4.17716 6.10013 5.13864 5.13864C6.10013 4.17716 7.32513 3.52237 8.65875 3.2571C9.99237 2.99183 11.3747 3.12798 12.6309 3.64833C13.8872 4.16868 14.9609 5.04987 15.7164 6.18045C16.4718 7.31104 16.875 8.64025 16.875 10C16.875 12.0664 16.025 12.5 15.3125 12.5C14.6 12.5 13.75 12.0664 13.75 10V6.875C13.75 6.70924 13.6842 6.55027 13.5669 6.43306C13.4497 6.31585 13.2908 6.25 13.125 6.25C12.9592 6.25 12.8003 6.31585 12.6831 6.43306C12.5658 6.55027 12.5 6.70924 12.5 6.875V7.20781C11.9391 6.70494 11.2398 6.38265 10.4931 6.28292C9.74647 6.18319 8.98707 6.31065 8.31388 6.64868C7.64069 6.98672 7.08491 7.51967 6.71894 8.17809C6.35298 8.83652 6.19379 9.5899 6.26213 10.3401C6.33046 11.0903 6.62315 11.8025 7.10206 12.384C7.58097 12.9654 8.2239 13.3892 8.94709 13.6C9.67028 13.8109 10.4402 13.799 11.1566 13.566C11.8729 13.333 12.5025 12.8897 12.9633 12.2937C13.432 13.2312 14.2406 13.75 15.3125 13.75C17.0734 13.75 18.125 12.3484 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM10 12.5C9.50555 12.5 9.0222 12.3534 8.61107 12.0787C8.19995 11.804 7.87952 11.4135 7.6903 10.9567C7.50108 10.4999 7.45157 9.99723 7.54804 9.51227C7.6445 9.02732 7.8826 8.58186 8.23223 8.23223C8.58186 7.8826 9.02732 7.6445 9.51227 7.54804C9.99723 7.45157 10.4999 7.50108 10.9567 7.6903C11.4135 7.87952 11.804 8.19995 12.0787 8.61107C12.3534 9.0222 12.5 9.50555 12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 10 12.5Z"
        fill="#868682"
      />
    </svg>
  ),
  [NOTIFICATION_TYPES.POKE]: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6875 6.875C14.3232 6.8746 13.9645 6.96566 13.6445 7.13984C13.5488 6.84357 13.391 6.57113 13.1816 6.34075C12.9722 6.11036 12.716 5.92734 12.4301 5.80391C12.1443 5.68048 11.8354 5.61949 11.5241 5.62501C11.2128 5.63053 10.9063 5.70244 10.625 5.83594V3.4375C10.625 2.85734 10.3945 2.30094 9.9843 1.8907C9.57407 1.48047 9.01767 1.25 8.43751 1.25C7.85735 1.25 7.30095 1.48047 6.89071 1.8907C6.48047 2.30094 6.25001 2.85734 6.25001 3.4375V9.6875L5.95157 9.20859C5.80727 8.96006 5.61543 8.74238 5.387 8.56798C5.15857 8.39358 4.89804 8.26588 4.62026 8.19218C4.05926 8.04332 3.46211 8.12342 2.96016 8.41484C2.45822 8.70627 2.0926 9.18516 1.94375 9.74616C1.79489 10.3072 1.87499 10.9043 2.16641 11.4062L2.53126 12.0492C5.21954 16.7883 6.33204 18.75 10 18.75C11.8227 18.7479 13.5702 18.0229 14.8591 16.7341C16.1479 15.4452 16.8729 13.6977 16.875 11.875V9.0625C16.875 8.48234 16.6445 7.92594 16.2343 7.5157C15.8241 7.10547 15.2677 6.875 14.6875 6.875ZM15.625 11.875C15.6234 13.3663 15.0302 14.7961 13.9757 15.8506C12.9211 16.9052 11.4913 17.4983 10 17.5C7.06016 17.5 6.26251 16.0938 3.61876 11.4313L3.25235 10.7852V10.7812C3.12794 10.5661 3.09402 10.3105 3.15804 10.0704C3.22205 9.83026 3.37877 9.62539 3.59376 9.50078C3.73616 9.41829 3.89794 9.37515 4.06251 9.37578C4.22731 9.37554 4.38926 9.41874 4.53204 9.50104C4.67482 9.58333 4.79339 9.70181 4.87579 9.84453C4.87897 9.85079 4.88263 9.8568 4.88673 9.8625L6.34532 12.2063C6.4173 12.3212 6.52472 12.4096 6.65136 12.4581C6.778 12.5066 6.91699 12.5127 7.04735 12.4753C7.17771 12.4379 7.29237 12.3591 7.37403 12.2508C7.45568 12.1425 7.4999 12.0106 7.50001 11.875V3.4375C7.50001 3.18886 7.59878 2.9504 7.77459 2.77459C7.95041 2.59877 8.18887 2.5 8.43751 2.5C8.68615 2.5 8.9246 2.59877 9.10042 2.77459C9.27623 2.9504 9.37501 3.18886 9.37501 3.4375V8.75C9.37501 8.91576 9.44085 9.07473 9.55806 9.19194C9.67527 9.30915 9.83425 9.375 10 9.375C10.1658 9.375 10.3247 9.30915 10.4419 9.19194C10.5592 9.07473 10.625 8.91576 10.625 8.75V7.8125C10.625 7.56386 10.7238 7.3254 10.8996 7.14959C11.0754 6.97377 11.3139 6.875 11.5625 6.875C11.8111 6.875 12.0496 6.97377 12.2254 7.14959C12.4012 7.3254 12.5 7.56386 12.5 7.8125V9.375C12.5 9.54076 12.5659 9.69973 12.6831 9.81694C12.8003 9.93415 12.9592 10 13.125 10C13.2908 10 13.4497 9.93415 13.5669 9.81694C13.6842 9.69973 13.75 9.54076 13.75 9.375V9.0625C13.75 8.81386 13.8488 8.5754 14.0246 8.39959C14.2004 8.22377 14.4389 8.125 14.6875 8.125C14.9361 8.125 15.1746 8.22377 15.3504 8.39959C15.5262 8.5754 15.625 8.81386 15.625 9.0625V11.875Z"
        fill="#868682"
      />
    </svg>
  ),
};

// for testing purposes
const notifications = [
  {
    type: NOTIFICATION_TYPES.FORK,
    username: "John Doe",
    accountId: "cameron_banyan.near",
    action: "forked",
    componentName: "DIG.Button",
    timestamp: "Just now",
    desc: "",
  },
  {
    type: NOTIFICATION_TYPES.REPLY,
    username: "John Doe",
    accountId: "cameron_banyan.near",
    action: "replied to a discussion on",
    componentName: "DIG.Button",
    timestamp: "Today",
    desc: "This is a preview of the post or reply referenced by the notification. It will concatenate if it runs longer than two lines.",
  },
  {
    type: NOTIFICATION_TYPES.FOLLOW,
    username: "John Doe",
    accountId: "cameron_banyan.near",
    action: "followed you",
    componentName: "",
    timestamp: "3d ago",
    desc: "",
  },
  {
    type: NOTIFICATION_TYPES.LIKE,
    username: "John Doe",
    accountId: "cameron_banyan.near",
    action: "liked your post",
    componentName: "",
    timestamp: "3w ago",
    desc: "This is a preview of the post or reply referenced by the notification. It will concatenate if it runs longer than two lines.",
  },
  {
    type: NOTIFICATION_TYPES.MENTION,
    username: "John Doe",
    accountId: "cameron_banyan.near",
    action: "mentioned you",
    componentName: "",
    timestamp: "1y ago",
    desc: "@JaneDoe, we'd love to have you contribute!",
  },
  {
    type: NOTIFICATION_TYPES.POKE,
    username: "John Doe",
    accountId: "cameron_banyan.near",
    action: "poked you",
    componentName: "",
    timestamp: "1d ago",
    desc: "desc desc desc desc desc desc desc desc desc desc desc ",
  },
];

return (
  <>
    <Widget src="golas.near/widget/N_NotificationsBanner" />
    {notifications.map((n) => (
      <Widget
        src="${REPL_ACCOUNT}/widget/Notification"
        props={{
          ...n,
          icon: icons[n.type],
        }}
      />
    ))}
  </>
);
