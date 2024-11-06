// I know this services cards approach is not perfect
// I tried many things but these complex svgs from their website are not working properly with img tag, so i had to do it like this

export const servicesCards = [
    {
        icon: `<svg  width="5em" height="5em" viewBox="0 0 82 68" fill="none" xmlns="http://www.w3.org/2000/svg">
 <mask id="mask0_730_1053" maskUnits="userSpaceOnUse" x="0" y="0" width="82" height="68"> <rect x="0.390625" y="0.246094" width="81.2422" height="67.001" fill="currentColor"></rect> </mask> <g mask="url(#mask0_730_1053)"> <path d="M23.9219 8.00422C23.9219 4.92009 26.422 2.41992 29.5062 2.41992H36.6909C39.775 2.41992 42.2752 4.9201 42.2752 8.00422V59.1936C42.2752 62.2777 39.775 64.7779 36.6909 64.7779H29.5062C26.422 64.7779 23.9219 62.2777 23.9219 59.1936V8.00422Z" fill="currentColor" fill-opacity="0.1"></path> <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M14.1596 33.6212H6.97492C4.91884 33.6212 3.25206 35.288 3.25206 37.3441V59.1929C3.25206 61.249 4.91884 62.9157 6.97492 62.9157H14.1596C16.2157 62.9157 17.8825 61.249 17.8825 59.1929V37.3441C17.8825 35.288 16.2157 33.6212 14.1596 33.6212ZM6.97492 31.7598C3.8908 31.7598 1.39062 34.2599 1.39062 37.3441V59.1929C1.39062 62.277 3.89079 64.7772 6.97492 64.7772H14.1596C17.2437 64.7772 19.7439 62.277 19.7439 59.1929V37.3441C19.7439 34.2599 17.2437 31.7598 14.1596 31.7598H6.97492Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M36.6909 4.28135H29.5062C27.4501 4.28135 25.7833 5.94814 25.7833 8.00422V59.1936C25.7833 61.2497 27.4501 62.9164 29.5062 62.9164H36.6909C38.7469 62.9164 40.4137 61.2497 40.4137 59.1936V8.00422C40.4137 5.94813 38.7469 4.28135 36.6909 4.28135ZM29.5062 2.41992C26.422 2.41992 23.9219 4.92009 23.9219 8.00422V59.1936C23.9219 62.2777 26.422 64.7779 29.5062 64.7779H36.6909C39.775 64.7779 42.2752 62.2777 42.2752 59.1936V8.00422C42.2752 4.9201 39.775 2.41992 36.6909 2.41992H29.5062Z" fill="currentColor"></path> <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M59.2299 16.2452H52.0452C49.9892 16.2452 48.3224 17.912 48.3224 19.9681V59.1936C48.3224 61.2496 49.9891 62.9164 52.0452 62.9164H59.2299C61.286 62.9164 62.9528 61.2496 62.9528 59.1936V19.9681C62.9528 17.912 61.286 16.2452 59.2299 16.2452ZM52.0452 14.3838C48.9611 14.3838 46.4609 16.884 46.4609 19.9681V59.1936C46.4609 62.2777 48.9611 64.7779 52.0452 64.7779H59.2299C62.314 64.7779 64.8142 62.2777 64.8142 59.1936V19.9681C64.8142 16.884 62.314 14.3838 59.2299 14.3838H52.0452Z" fill="currentColor"></path> </g> 
</svg>`,
        title: "Market Trends Analysis",
        desc: "Discover winning trends before everyone else and see how you can take advantage"
    },
    {
        icon: `<svg width="5.3em" height="5.3em" viewBox="0 0 90 75" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_730_1096" maskUnits="userSpaceOnUse" x="0" y="0" width="90" height="75"> <rect x="0.28125" y="0.984375" width="88.8455" height="73.2715" fill="currentColor"></rect> </mask> <g mask="url(#mask0_730_1096)"> <path opacity="0.45" fill-rule="evenodd" clip-rule="evenodd" d="M51.6094 59.6895L62.8158 72.9963C63.181 73.4208 63.8213 73.4688 64.2458 73.1035C64.6703 72.7383 64.7183 72.098 64.353 71.6736L54.2606 59.6895H51.6094Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5491 3.86458C16.4461 3.86458 3.39192 16.9187 3.39192 33.0218C3.39192 49.1249 16.4461 62.179 32.5492 62.179C48.6522 62.179 61.7064 49.1249 61.7064 33.0218C61.7064 16.9187 48.6522 3.86458 32.5491 3.86458ZM32.5491 1.83658C15.326 1.83659 1.36392 15.7987 1.36393 33.0218C1.36393 50.2449 15.326 64.207 32.5492 64.207C49.7723 64.207 63.7344 50.2449 63.7344 33.0218C63.7344 15.7987 49.7723 1.83658 32.5491 1.83658Z" fill="currentColor"></path> <path d="M22.1519 27.1824C22.1519 21.4405 26.8067 16.7857 32.5486 16.7857C38.2905 16.7857 42.9453 21.4405 42.9453 27.1824C42.9453 32.9243 38.2906 37.5791 32.5486 37.5791C26.8067 37.5791 22.1519 32.9243 22.1519 27.1824Z" fill="currentColor" fill-opacity="0.1"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5486 18.8137C27.9267 18.8137 24.1799 22.5605 24.1799 27.1824C24.1799 31.8043 27.9267 35.5511 32.5486 35.5511C37.1705 35.5511 40.9173 31.8043 40.9173 27.1824C40.9173 22.5605 37.1705 18.8137 32.5486 18.8137ZM32.5486 16.7857C26.8067 16.7857 22.1519 21.4405 22.1519 27.1824C22.1519 32.9243 26.8067 37.5791 32.5486 37.5791C38.2906 37.5791 42.9453 32.9243 42.9453 27.1824C42.9453 21.4405 38.2905 16.7857 32.5486 16.7857Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5606 43.7891C24.2924 43.7891 17.3809 49.6081 15.7024 57.375L13.7202 56.9466C15.5962 48.2659 23.3176 41.7611 32.5606 41.7611C41.6649 41.7611 49.2927 48.0721 51.3125 56.5569L49.3396 57.0265C47.5324 49.4345 40.7045 43.7891 32.5606 43.7891Z" fill="currentColor"></path> </g> </svg>`,
        title: "Market Trends Analysis",
        desc: "Discover winning trends before everyone else and see how you can take advantage"
    },
    {
        icon: `<svg width="5em" height="5em" viewBox="0 0 83 68" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_730_1051" maskUnits="userSpaceOnUse" x="0" y="0" width="83" height="68"> <rect x="0.765625" y="0.246094" width="81.2422" height="67.001" fill="currentColor"></rect> </mask> <g mask="url(#mask0_730_1051)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.27344 33.7461C4.27344 50.7052 18.0215 64.4532 34.9805 64.4532C51.9395 64.4532 65.6876 50.7052 65.6876 33.7461C65.6876 16.7871 51.9395 3.03906 34.9805 3.03906C18.0215 3.03906 4.27344 16.7871 4.27344 33.7461ZM34.9805 1.03906C16.9169 1.03906 2.27344 15.6825 2.27344 33.7461C2.27344 51.8097 16.9169 66.4532 34.9805 66.4532C53.0441 66.4532 67.6876 51.8097 67.6876 33.7461C67.6876 15.6825 53.0441 1.03906 34.9805 1.03906Z" fill="currentColor"></path> <path d="M19.7812 51.2501C19.7812 42.8536 26.588 36.0469 34.9845 36.0469V36.0469C43.381 36.0469 50.1877 42.8536 50.1877 51.2501V51.2501C50.1877 59.6466 43.381 66.4533 34.9845 66.4533V66.4533C26.588 66.4533 19.7812 59.6466 19.7812 51.2501V51.2501Z" fill="currentColor" fill-opacity="0.1"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7812 51.2501C21.7812 58.542 27.6925 64.4533 34.9845 64.4533C42.2764 64.4533 48.1877 58.542 48.1877 51.2501C48.1877 43.9582 42.2764 38.0469 34.9845 38.0469C27.6925 38.0469 21.7812 43.9582 21.7812 51.2501ZM34.9845 36.0469C26.588 36.0469 19.7812 42.8536 19.7812 51.2501C19.7812 59.6466 26.588 66.4533 34.9845 66.4533C43.381 66.4533 50.1877 59.6466 50.1877 51.2501C50.1877 42.8536 43.381 36.0469 34.9845 36.0469Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2891 41.7611C12.2891 54.294 22.4489 64.4538 34.9818 64.4538C47.5147 64.4538 57.6745 54.294 57.6745 41.7611C57.6745 29.2282 47.5147 19.0684 34.9818 19.0684C22.4489 19.0684 12.2891 29.2282 12.2891 41.7611ZM34.9818 17.0684C21.3444 17.0684 10.2891 28.1237 10.2891 41.7611C10.2891 55.3985 21.3444 66.4538 34.9818 66.4538C48.6192 66.4538 59.6745 55.3985 59.6745 41.7611C59.6745 28.1237 48.6192 17.0684 34.9818 17.0684Z" fill="currentColor"></path> </g> </svg>`,
        title: "Market Trends Analysis",
        desc: "Discover winning trends before everyone else and see how you can take advantage"
    },
    {
        icon: `<svg width="5em" height="5em" viewBox="0 0 83 68" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_732_1115" maskUnits="userSpaceOnUse" x="0" y="0" width="83" height="68"> <rect x="0.890625" y="0.246094" width="81.2422" height="67.001" fill="currentColor"></rect> </mask> <g mask="url(#mask0_732_1115)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5938 45.4932V43.4932H64.7029C67.4643 43.4932 69.7029 45.7317 69.7029 48.4932V61.624C69.7029 64.3854 67.4643 66.624 64.7029 66.624H46.5938V64.624H64.7029C66.3598 64.624 67.7029 63.2809 67.7029 61.624V48.4932C67.7029 46.8363 66.3598 45.4932 64.7029 45.4932H46.5938Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.77344 54.6748C1.77344 51.9134 4.01201 49.6748 6.77344 49.6748H22.4688V51.6748H6.77344C5.11658 51.6748 3.77344 53.018 3.77344 54.6748V61.624C3.77344 63.2809 5.11658 64.624 6.77344 64.624H22.4688V66.624H6.77344C4.01201 66.624 1.77344 64.3854 1.77344 61.624V54.6748Z" fill="currentColor"></path> <path d="M32.9493 2.0364C33.5936 0.295159 36.0564 0.29516 36.7007 2.0364L38.8595 7.87055C39.0621 8.41799 39.4937 8.84961 40.0412 9.05218L45.8753 11.211C47.6165 11.8553 47.6165 14.3181 45.8753 14.9624L40.0412 17.1212C39.4937 17.3238 39.0621 17.7554 38.8595 18.3029L36.7007 24.137C36.0564 25.8783 33.5936 25.8783 32.9493 24.137L30.7905 18.3029C30.5879 17.7554 30.1563 17.3238 29.6088 17.1212L23.7747 14.9624C22.0334 14.3181 22.0334 11.8553 23.7747 11.211L29.6088 9.05218C30.1563 8.84961 30.5879 8.41799 30.7905 7.87055L32.9493 2.0364Z" fill="currentColor" fill-opacity="0.1"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M37.0768 8.51408L34.8205 2.41648L32.5641 8.51408C32.1407 9.6584 31.2385 10.5606 30.0942 10.9841L23.9966 13.2404L30.0942 15.4967C31.2385 15.9201 32.1407 16.8223 32.5641 17.9667L34.8205 24.0643L37.0768 17.9667C37.5002 16.8223 38.4024 15.9201 39.5467 15.4967L45.6443 13.2404L39.5467 10.9841C38.4024 10.5606 37.5002 9.6584 37.0768 8.51408ZM36.7809 1.69107C36.1074 -0.128794 33.5335 -0.128794 32.8601 1.69107L30.6037 7.78867C30.392 8.36083 29.9409 8.81194 29.3687 9.02366L23.2711 11.28C21.4513 11.9534 21.4513 14.5274 23.2711 15.2008L29.3687 17.4571C29.9409 17.6688 30.392 18.1199 30.6037 18.6921L32.8601 24.7897C33.5335 26.6095 36.1074 26.6095 36.7809 24.7897L39.0372 18.6921C39.2489 18.1199 39.7 17.6688 40.2722 17.4571L46.3698 15.2008C48.1896 14.5274 48.1896 11.9534 46.3698 11.28L40.2722 9.02366C39.7 8.81194 39.2489 8.36083 39.0372 7.78867L36.7809 1.69107Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M42.1431 33.8926H27.4922C25.283 33.8926 23.4922 35.6834 23.4922 37.8926V64.624H46.1431V37.8926C46.1431 35.6834 44.3522 33.8926 42.1431 33.8926ZM27.4922 31.8926C24.1785 31.8926 21.4922 34.5789 21.4922 37.8926V66.624H48.1431V37.8926C48.1431 34.5789 45.4568 31.8926 42.1431 31.8926H27.4922Z" fill="currentColor"></path> </g> </svg>`,
        title: "Market Trends Analysis",
        desc: "Discover winning trends before everyone else and see how you can take advantage"
    },
    {
        icon: `<svg width="5em" height="5em" viewBox="0 0 82 68" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_730_1049" maskUnits="userSpaceOnUse" x="0" y="0" width="82" height="68"> <rect x="0.140625" y="0.246094" width="81.2422" height="67.001" fill="currentColor"></rect> </mask> <g mask="url(#mask0_730_1049)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2109 12.48C12.2109 6.47902 16.9307 1.61426 22.7528 1.61426H68.0518C73.874 1.61426 78.5937 6.47902 78.5937 12.48V38.0901C78.5937 44.0911 72.9027 48.9559 67.0806 48.9559H66.6871V46.9803H67.0806C71.8442 46.9803 76.677 43 76.677 38.0901V12.48C76.677 7.5701 72.8154 3.58985 68.0518 3.58985H22.7528C17.9893 3.58985 14.1276 7.57011 14.1276 12.48V14.1231H12.2109V12.48Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M57.9399 15.7129H10.7242C6.48989 15.7129 3.05733 19.2509 3.05733 23.6153V52.1888C3.05733 56.5531 6.48988 60.0911 10.7242 60.0911H57.9399C62.1741 60.0911 65.6067 56.5531 65.6067 52.1887V23.6153C65.6067 19.2509 62.1741 15.7129 57.9399 15.7129ZM10.7242 13.7373C5.43132 13.7373 1.14062 18.1598 1.14062 23.6153V52.1888C1.14062 57.6442 5.43131 62.0667 10.7242 62.0667H57.9399C63.2327 62.0667 67.5234 57.6442 67.5234 52.1887V23.6153C67.5234 18.1598 63.2327 13.7373 57.9399 13.7373H10.7242Z" fill="currentColor"></path> <path opacity="0.1" d="M7.5 25.2969C7.5 22.4012 9.69037 20.0537 12.3923 20.0537H26.0374C28.7393 20.0537 30.9297 22.4012 30.9297 25.2969V50.5205C30.9297 53.4163 28.7393 55.7637 26.0374 55.7637H12.3923C9.69037 55.7637 7.5 53.4163 7.5 50.5205V25.2969Z" fill="currentColor"></path> </g> </svg>`,
        title: "Market Trends Analysis",
        desc: "Discover winning trends before everyone else and see how you can take advantage"
    },
    {
        icon: `<svg width="5em" height="5em" viewBox="0 0 82 68" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_906_140" maskUnits="userSpaceOnUse" x="0" y="0" width="82" height="68"> <path d="M0.222656 0.570312H81.4648V67.5713H0.222656V0.570312Z" fill="currentColor"></path> </mask> <g mask="url(#mask0_906_140)"> <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M22.6323 24.9218C23.2641 25.0911 23.639 25.7405 23.4697 26.3723C21.2488 34.661 26.1676 43.1807 34.4563 45.4016C39.9348 46.8696 45.5163 45.2186 49.3123 41.5339L47.5524 41.5339C46.8984 41.5339 46.3681 41.0037 46.3681 40.3496C46.3681 39.6955 46.8984 39.1653 47.5524 39.1653L51.9181 39.1653C52.5722 39.1653 53.1025 39.6955 53.1025 40.3496L53.1025 45.2526C53.1025 45.9066 52.5722 46.4369 51.9181 46.4369C51.264 46.4369 50.7338 45.9066 50.7338 45.2526L50.7338 43.451C46.3677 47.5415 40.0503 49.3528 33.8433 47.6896C24.291 45.1301 18.6222 35.3115 21.1818 25.7592C21.351 25.1274 22.0005 24.7525 22.6323 24.9218Z" fill="currentColor"></path> <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M54.4263 34.9845C53.7945 34.8152 53.4196 34.1658 53.5889 33.534C55.8098 25.2453 50.891 16.7256 42.6023 14.5046C37.1238 13.0367 31.5423 14.6876 27.7463 18.3723L29.5061 18.3723C30.1602 18.3723 30.6905 18.9025 30.6905 19.5566C30.6905 20.2107 30.1602 20.741 29.5061 20.741L25.1405 20.741C24.4864 20.741 23.9561 20.2107 23.9561 19.5566L23.9561 14.6537C23.9561 13.9996 24.4864 13.4694 25.1405 13.4694C25.7945 13.4694 26.3248 13.9996 26.3248 14.6537L26.3248 16.4553C30.6909 12.3648 37.0083 10.5535 43.2153 12.2167C52.7676 14.7762 58.4364 24.5947 55.8768 34.147C55.7075 34.7788 55.0581 35.1538 54.4263 34.9845Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M65.0186 4.86476H12.066C6.83327 4.86476 2.59132 9.10671 2.59132 14.3394V46.4367C2.59132 51.6694 6.83327 55.9113 12.066 55.9113H65.0186C70.2513 55.9113 74.4932 51.6694 74.4932 46.4367V14.3394C74.4932 9.10671 70.2513 4.86476 65.0186 4.86476ZM12.066 2.49609C5.52509 2.49609 0.222656 7.79853 0.222656 14.3394V46.4367C0.222656 52.9775 5.52509 58.28 12.066 58.28H65.0186C71.5595 58.28 76.8619 52.9776 76.8619 46.4367V14.3394C76.8619 7.79853 71.5595 2.49609 65.0186 2.49609H12.066Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M26.1836 65.3855C26.1836 64.7314 26.7138 64.2012 27.3679 64.2012H50.0645C50.7186 64.2012 51.2489 64.7314 51.2489 65.3855C51.2489 66.0396 50.7186 66.5698 50.0645 66.5698H27.3679C26.7138 66.5698 26.1836 66.0396 26.1836 65.3855Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M39.8179 21.3438V22.7748C40.0017 22.8059 40.1838 22.8444 40.3643 22.8895C40.9037 23.0243 41.3533 23.1892 41.7129 23.3839C42.0575 23.5787 42.3722 23.7735 42.6419 23.9833C42.7142 24.0395 42.7821 24.0914 42.8452 24.1396L42.8452 24.1396L42.8453 24.1396C43.0176 24.2713 43.1535 24.3751 43.2413 24.4628L43.4661 24.6876L41.9227 26.231C41.8328 26.1111 41.7129 25.9612 41.5631 25.7964C41.4132 25.6316 41.0536 25.4068 40.4992 25.1221C39.9298 24.8374 39.3304 24.7026 38.7011 24.7026C37.8769 24.7026 37.2176 24.9123 36.7082 25.3469C36.1987 25.7664 35.944 26.2759 35.944 26.8453C35.944 27.4297 36.2137 27.9092 36.7681 28.2688C37.3075 28.6284 37.9818 28.9131 38.761 29.1229C39.5402 29.3327 40.3194 29.5874 41.0985 29.8571C41.8777 30.1269 42.537 30.5764 43.0914 31.2057C43.6309 31.8351 43.9156 32.6292 43.9156 33.6032C43.9156 34.8619 43.4211 35.9258 42.4621 36.7649C41.7546 37.3744 40.8732 37.7704 39.8179 37.9415V39.433H37.4492V37.9598C37.1477 37.9152 36.8558 37.8515 36.5733 37.7688C35.9589 37.589 35.4495 37.3642 35.0599 37.1245C34.6553 36.8698 34.3107 36.615 34.011 36.3603C33.7113 36.1056 33.5015 35.8958 33.3667 35.716L33.1719 35.4313L34.7153 33.9029C34.7452 33.9628 34.8052 34.0377 34.8801 34.1277C34.94 34.2176 35.1048 34.3974 35.3446 34.6371C35.5843 34.8769 35.8541 35.1016 36.1388 35.2964C36.4085 35.4912 36.7681 35.671 37.2176 35.8209C37.6522 35.9707 38.1017 36.0456 38.5512 36.0456C39.5851 36.0456 40.3793 35.8059 40.9337 35.3564C41.4881 34.8918 41.7728 34.3075 41.7728 33.6032C41.7728 32.9888 41.4881 32.4944 40.9337 32.1048C40.3793 31.7152 39.72 31.4155 38.9408 31.1907C38.1616 30.966 37.3974 30.7112 36.6183 30.4415C35.8391 30.1718 35.1648 29.7373 34.6104 29.1379C34.0559 28.5385 33.7862 27.7743 33.7862 26.8303C33.7862 25.7215 34.2507 24.7625 35.1798 23.9234C35.8189 23.3564 36.5787 22.9809 37.4492 22.8018V21.3438H39.8179Z" fill="currentColor"></path> </g> </svg>`,
        title: "Market Trends Analysis",
        desc: "Discover winning trends before everyone else and see how you can take advantage"
    },
    {
        icon: `<svg width="5em" height="5em" viewBox="0 0 82 68" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_730_1040" maskUnits="userSpaceOnUse" x="0" y="0" width="82" height="68"> <rect x="0.515625" y="0.246094" width="81.2422" height="67.001" fill="currentColor"></rect> </mask> <g mask="url(#mask0_730_1040)"> <path d="M30.3233 23.8616C33.835 22.5205 37.7954 23.1549 40.7127 25.5256C43.6299 27.8963 45.0608 31.6432 44.4663 35.355C43.8718 39.0668 41.3423 42.1794 37.8306 43.5205C34.3189 44.8615 30.3585 44.2272 27.4412 41.8565C24.524 39.4858 23.0931 35.7388 23.6876 32.0271C24.2821 28.3153 26.8116 25.2026 30.3233 23.8616Z" fill="currentColor" fill-opacity="0.1"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M31.0368 25.73C28.1926 26.8161 26.1439 29.3371 25.6624 32.3434C25.1809 35.3496 26.3398 38.3843 28.7026 40.3044C31.0653 42.2245 34.2729 42.7382 37.1171 41.6521C39.9613 40.5659 42.01 38.0449 42.4915 35.0387C42.973 32.0325 41.8141 28.9978 39.4513 27.0777C37.0886 25.1576 33.881 24.6439 31.0368 25.73ZM40.7127 25.5256C37.7954 23.1549 33.835 22.5205 30.3233 23.8616C26.8116 25.2026 24.2821 28.3153 23.6876 32.0271C23.0931 35.7388 24.524 39.4858 27.4412 41.8565C30.3585 44.2272 34.3189 44.8615 37.8306 43.5205C41.3423 42.1794 43.8718 39.0668 44.4663 35.355C45.0608 31.6432 43.6299 27.8963 40.7127 25.5256Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M26.7745 14.5559C19.9383 17.1665 15.0141 23.2259 13.8568 30.4516C12.6995 37.6773 15.485 44.9715 21.164 49.5866C26.843 54.2016 34.5527 55.4364 41.3889 52.8258C48.2252 50.2152 53.1494 44.1558 54.3067 36.9301C55.4639 29.7044 52.6785 22.4103 46.9995 17.7952C41.3205 13.1801 33.6108 11.9453 26.7745 14.5559ZM48.2608 16.2431C42.0273 11.1774 33.5648 9.82201 26.061 12.6875C18.5573 15.553 13.1522 22.2041 11.882 30.1353C10.6117 38.0665 13.6691 46.073 19.9026 51.1387C26.1361 56.2044 34.5986 57.5597 42.1024 54.6942C49.6062 51.8287 55.0112 45.1776 56.2815 37.2464C57.5518 29.3152 54.4943 21.3088 48.2608 16.2431Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0178 4.71506C12.6656 8.66829 5.20893 17.844 3.45648 28.7858C1.70402 39.7276 5.92207 50.7732 14.5217 57.7618C23.1214 64.7503 34.7961 66.6202 45.1483 62.667C55.5004 58.7137 62.9571 49.538 64.7095 38.5962C66.462 27.6544 62.2439 16.6088 53.6443 9.62025C45.0446 2.63167 33.3699 0.761826 23.0178 4.71506ZM54.9056 8.06814C45.7515 0.628934 33.3239 -1.36148 22.3043 2.84666C11.2846 7.0548 3.3471 16.8222 1.48165 28.4695C-0.383809 40.1169 4.10622 51.8747 13.2604 59.3139C22.4146 66.7531 34.8421 68.7435 45.8618 64.5353C56.8814 60.3272 64.8189 50.5598 66.6844 38.9125C68.5498 27.2651 64.0598 15.5073 54.9056 8.06814Z" fill="currentColor"></path> </g> </svg>`,
        title: "Market Trends Analysis",
        desc: "Discover winning trends before everyone else and see how you can take advantage"
    },
    {
        icon: `<svg width="5em" height="5em" viewBox="0 0 83 68" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_738_1373" maskUnits="userSpaceOnUse" x="0" y="0" width="83" height="68"> <path d="M0.960938 0.880859H82.2031V67.8818H0.960938V0.880859Z" fill="currentColor"></path> </mask> <g mask="url(#mask0_738_1373)"> <path d="M30.7812 32.611C30.7812 30.1885 32.7451 28.2246 35.1676 28.2246H40.1289C42.5514 28.2246 44.5153 30.1885 44.5153 32.611V37.5598C44.5153 39.9823 42.5514 41.9461 40.1289 41.9461H35.1676C32.7451 41.9461 30.7812 39.9823 30.7812 37.5598V32.611Z" fill="currentColor" fill-opacity="0.1"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M40.2453 30.4218H35.044C33.9011 30.4218 32.9746 31.3483 32.9746 32.4912V37.6795C32.9746 38.8224 33.9011 39.7489 35.044 39.7489H40.2453C41.3882 39.7489 42.3147 38.8224 42.3147 37.6795V32.4912C42.3147 31.3483 41.3882 30.4218 40.2453 30.4218ZM35.044 27.8926C32.5042 27.8926 30.4453 29.9515 30.4453 32.4912V37.6795C30.4453 40.2193 32.5042 42.2782 35.044 42.2782H40.2453C42.7851 42.2782 44.844 40.2193 44.844 37.6795V32.4912C44.844 29.9515 42.7851 27.8926 40.2453 27.8926H35.044Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M29.2406 1.94824C26.424 1.94824 24.1406 4.23159 24.1406 7.04824V11.1465H13.1148C7.82195 11.1465 3.53125 15.569 3.53125 21.0244V51.5979C3.53125 57.0534 7.82194 61.4759 13.1148 61.4759H62.3305C67.6233 61.4759 71.914 57.0534 71.914 51.5979V21.0244C71.914 15.569 67.6233 11.1465 62.3305 11.1465H51.1457V7.04824C51.1457 4.23159 48.8623 1.94824 46.0457 1.94824H29.2406ZM48.9457 11.1465V7.04824C48.9457 5.44662 47.6473 4.14824 46.0457 4.14824H29.2406C27.639 4.14824 26.3406 5.44662 26.3406 7.04824V11.1465H48.9457ZM62.3305 13.1221H13.1148C8.88052 13.1221 5.44796 16.6601 5.44796 21.0244V27.6699L32.5008 32.5869L32.1073 34.7515L5.44796 29.906V51.5979C5.44796 55.9623 8.88051 59.5003 13.1148 59.5003H62.3305C66.5648 59.5003 69.9973 55.9623 69.9973 51.5979V29.9369L43.2354 34.8118L42.8411 32.6474L69.9973 27.7007V21.0244C69.9973 16.6601 66.5648 13.1221 62.3305 13.1221Z" fill="currentColor"></path> </g> </svg>`,
        title: "Market Trends Analysis",
        desc: "Discover winning trends before everyone else and see how you can take advantage"
    },
];

export const accordions = [
    {
        title: "Results Driven",
        desc: "Delivering actionable insights with measurable RoI"
    },
    {
        title: "Cost Effective Value-Add",
        desc: "Get 80% of the value of traditional research and analysis for 20% of the cost"
    },
    {
        title: "Tech-Driven Creativity",
        desc: "Methodologies inspired by human creativity and empowered by technology"
    },
    {
        title: "Industry Agnostic Expertise",
        desc: "Hundreds of completed projects across all sectors and verticals"
    },
];

export const fiverrClients = [
    {
        tag: "151 of 324",
        imgSrc: "/clients/client1.jpg",
        name: "Ben Cane",
        clientRole: "Founder of Munity",
        review: "Working with Addifico was a pleasure. Despite needing market research and competitor analysis in a niche area, they delivered beyond my expectations. All of the work was comprehensive, well-structured and extremely detailed. The communication was perfect and they operated with great professionalism."
    },
    {
        tag: "242 of 324",
        imgSrc: "/clients/client2.jpg",
        name: "Will Eversten",
        clientRole: "CEO at Axeleos Consulting",
        review: "This is my second time working with Addifico Consulting on a market research project. They are prompt, professional, and provide top-notch deliverables. They are always quick to respond with clarification if needed, and overall, they’ve been a pleasure to work with. I'd heartily recommend them for anyone looking for professional market research."
    },
    {
        tag: "5 of 324",
        imgSrc: "/clients/client3.jpg",
        name: "Deshawn Robinson",
        clientRole: "ceo at doors open connect",
        review: "Addifico was phenomenal and worked quickly to help me get the information I needed. In addition to purchasing one of the programs/plans they had, they helped me figure out what I needed best. They were able to also help me break down the data and provided some additional feedback on my pitch deck. I look forward to working with them further as I expand on my project. Highly recommend."
    },
    {
        tag: "137 of 324",
        imgSrc: "/clients/client4.jpg",
        name: "Nelson Dunk",
        clientRole: "chief creative office at skylight visual media",
        review: "Phenomenal job. We are a very niche market and I'm sure it took some extra digging to find all the information for the market research report. The report is incredibly detailed, accurate and well written. Very very happy with the work!"
    },
    {
        tag: "57 of 324",
        imgSrc: "/clients/client5.jpg",
        name: "Oliver Lauche",
        clientRole: "Founder of witjaw",
        review: "The analysis was very profound, even though the business model is rather new and experimental. Every result and figure was marked with the source and every calculation can be reconsidered"
    },
]

export const upworkClients = [
    {
        tag: "241 of 324",
        imgSrc: "/clients/client6.jpg",
        name: "Kristen Proctor",
        clientRole: "Head of strategic growth at autofulil limited",
        review: "Working with Addifico was a pleasure. Despite needing market research and competitor analysis in a niche area, they delivered beyond my expectations. All of the work was comprehensive, well-structured and extremely detailed. The communication was perfect and they operated with great professionalism."
    },
    {
        tag: "54 of 324",
        imgSrc: "/clients/client7.jpg",
        name: "Mohamed Ahmed",
        clientRole: "XCEO at magalix(acquired by weaveworks)",
        review: "Addifico Consulting did an excellent job researching, writing, and editing ebooks and market insight reports for us. They welcomed all feedback and adjusted it accordingly in the documents. I highly recommend Addifico Consulting for their excellent research skills and we will definitely be working with them again."
    },
    {
        tag: "52 of 324",
        imgSrc: "/clients/client8.jpg",
        name: "Bar Winkler",
        clientRole: "ex senior director bd at ironsource",
        review: "Addifico's team are masters at their work. They helped us with research, CI, data analysis and many tasks which took them 1/10 of the time they would take us. In all cases, their work was professional. I strongly recommend anyone looking for a high-quality research and analysis to hire Addifico Consulting."
    },
    {
        tag: "184 of 324",
        imgSrc: "/clients/client9.jpg",
        name: "Laurent Goffinon",
        clientRole: "founder of hirepro",
        review: "Addifico did an amazing job in a quick turn-around. They go straight to the point and provide great reasoning and the thought process for any deliverable! I would highly recommend them!"
    },
]

export const resources = [
    {
        date:"October 23, 2023",
        title:"Startup Market Sizing: Founder's Guide to TAM...",
        tag:"Market Sizing and Forecasting"
    },
    {
        date:"October 2, 2023",
        title:"7 Simple Steps to Ace Your Startup Market Research",
        tag:"Business Plan & Pitch Deck"
    },
    {
        date:"September 27, 2023",
        title:"Research and Planning for a New Business in 4 Steps",
        tag:"Business Plan & Pitch Deck"
    },
]