import "./index.css";
// import "react-pro-sidebar/dist/css/styles.css";
import { useProSidebar } from "react-pro-sidebar";
import React from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { SiApacheairflow } from "react-icons/si";
import { GiAbstract050 } from "react-icons/gi";

import { useSidebarContext } from "./contexts/sidebarContext";
export default function App() {
  const {
    collapseSidebar,
    toggleSidebar,
    collapsed,
    toggled,
    broken,
    rtl
  } = useProSidebar();
  const {
    sidebarRTL,
    setSidebarRTL,

    sidebarBackgroundColor,
    setSidebarBackgroundColor,

    sidebarImage,
    setSidebarImage
  } = useSidebarContext();
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <main>
        {broken ? (
          <button onClick={() => toggleSidebar()}>
            <span>{toggled ? <GiAbstract050 /> : <SiApacheairflow />}</span>
            toggleSidebar
          </button>
        ) : (
          <button onClick={() => collapseSidebar()}>
            <span>{collapsed ? <GiAbstract050 /> : <SiApacheairflow />}</span>
            collapseSidebar
          </button>
        )}

        <button onClick={() => setSidebarRTL(!sidebarRTL)}>
          <span>{rtl ? <FiArrowLeftCircle /> : <FiArrowRightCircle />}</span>
          toggleSidebarRTL
        </button>
        <button
          onClick={() =>
            setSidebarBackgroundColor(
              sidebarBackgroundColor === undefined ? "#D8315B" : undefined
            )
          }
        >
          setSidebarBackgroundColor
        </button>
        <button
          onClick={() =>
            setSidebarImage(
              sidebarImage === undefined
                ? "https://picsum.photos/200/300"
                : undefined
            )
          }
        >
          setSidebarImage
        </button>
      </main>
      <h1>Hello CodeSandbox</h1>
      <h2> Start editing to see some magic happen!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue
        at dui placerat tincidunt. Duis quis arcu non nulla ornare laoreet.
        Fusce ut leo massa. Fusce quis enim quis nisi ornare tincidunt eget
        vitae lorem. In rutrum non quam sed rhoncus. Mauris ut volutpat nunc. In
        fermentum lacinia nisl a facilisis. Vivamus in dui id nunc facilisis
        condimentum. Vestibulum porttitor elit ac felis tristique, mattis
        elementum nisi congue. Morbi viverra vitae nulla a pulvinar. Aliquam
        erat volutpat. Suspendisse velit mauris, pellentesque a arcu a,
        sollicitudin suscipit risus. Proin quis nisl quis massa lacinia
        scelerisque. Sed et lorem et libero malesuada venenatis vitae a dolor.
        Maecenas leo nunc, ultricies ut egestas quis, pulvinar ut nisi. Sed est
        augue, egestas in velit vitae, cursus consequat diam. Aenean ac pharetra
        tellus, eget imperdiet nibh. Etiam aliquet nunc eget felis dignissim
        suscipit. Suspendisse et nibh sit amet eros tempor venenatis. Proin
        massa est, lobortis ac felis ut, condimentum euismod arcu. Phasellus non
        lacus et ligula eleifend congue id nec nisl. Vestibulum non ultrices
        sapien. Vivamus pulvinar sed nisi et cursus. Duis suscipit purus
        ultrices mauris porttitor efficitur. Aenean ultricies ac purus ac
        mattis. Praesent aliquam, velit in ultricies pulvinar, lorem sapien
        placerat tellus, at tempus ante velit sit amet turpis. Donec dictum
        justo mi, nec pellentesque nisi rutrum eget. Suspendisse pharetra risus
        suscipit, gravida lectus a, lacinia odio. Nam nulla libero, imperdiet et
        urna sed, faucibus pulvinar dolor. Cras interdum viverra sem, sed auctor
        eros mattis in. Mauris ut dolor leo. Mauris euismod nisi quis velit
        condimentum vulputate. Morbi dignissim sapien quis diam venenatis
        aliquet. Cras faucibus nisi elementum nisi egestas, eget feugiat felis
        porttitor. Aenean aliquet consectetur diam, vehicula ornare velit
        aliquam nec. Curabitur rutrum neque ex, id faucibus dolor viverra
        commodo. Sed porttitor diam augue, tempus sollicitudin ante interdum ut.
        Donec euismod risus eu lorem ornare, id scelerisque ligula pulvinar.
        Vestibulum et ligula id mauris tempor mollis a ut tortor. Duis neque
        augue, tempor in pharetra non, vehicula faucibus odio. Praesent sodales
        maximus varius. Etiam at lorem dictum, venenatis neque ut, consequat
        felis. Quisque laoreet diam et eros consectetur ultricies. Ut a mi
        fringilla, feugiat nisi a, auctor ligula. Maecenas vitae luctus ipsum.
        Maecenas non nisl non lacus bibendum mollis. Nullam quis commodo eros.
        Donec maximus ornare felis id tristique. Curabitur eu sapien eget dolor
        venenatis dapibus quis ac dui. Proin sed augue ultricies, cursus justo
        a, posuere elit. Generated 5 paragraphs, 398 words, 2647 bytes of Lorem
        Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
        augue at dui placerat tincidunt. Duis quis arcu non nulla ornare
        laoreet. Fusce ut leo massa. Fusce quis enim quis nisi ornare tincidunt
        eget vitae lorem. In rutrum non quam sed rhoncus. Mauris ut volutpat
        nunc. In fermentum lacinia nisl a facilisis. Vivamus in dui id nunc
        facilisis condimentum. Vestibulum porttitor elit ac felis tristique,
        mattis elementum nisi congue. Morbi viverra vitae nulla a pulvinar.
        Aliquam erat volutpat. Suspendisse velit mauris, pellentesque a arcu a,
        sollicitudin suscipit risus. Proin quis nisl quis massa lacinia
        scelerisque. Sed et lorem et libero malesuada venenatis vitae a dolor.
        Maecenas leo nunc, ultricies ut egestas quis, pulvinar ut nisi. Sed est
        augue, egestas in velit vitae, cursus consequat diam. Aenean ac pharetra
        tellus, eget imperdiet nibh. Etiam aliquet nunc eget felis dignissim
        suscipit. Suspendisse et nibh sit amet eros tempor venenatis. Proin
        massa est, lobortis ac felis ut, condimentum euismod arcu. Phasellus non
        lacus et ligula eleifend congue id nec nisl. Vestibulum non ultrices
        sapien. Vivamus pulvinar sed nisi et cursus. Duis suscipit purus
        ultrices mauris porttitor efficitur. Aenean ultricies ac purus ac
        mattis. Praesent aliquam, velit in ultricies pulvinar, lorem sapien
        placerat tellus, at tempus ante velit sit amet turpis. Donec dictum
        justo mi, nec pellentesque nisi rutrum eget. Suspendisse pharetra risus
        suscipit, gravida lectus a, lacinia odio. Nam nulla libero, imperdiet et
        urna sed, faucibus pulvinar dolor. Cras interdum viverra sem, sed auctor
        eros mattis in. Mauris ut dolor leo. Mauris euismod nisi quis velit
        condimentum vulputate. Morbi dignissim sapien quis diam venenatis
        aliquet. Cras faucibus nisi elementum nisi egestas, eget feugiat felis
        porttitor. Aenean aliquet consectetur diam, vehicula ornare velit
        aliquam nec. Curabitur rutrum neque ex, id faucibus dolor viverra
        commodo. Sed porttitor diam augue, tempus sollicitudin ante interdum ut.
        Donec euismod risus eu lorem ornare, id scelerisque ligula pulvinar.
        Vestibulum et ligula id mauris tempor mollis a ut tortor. Duis neque
        augue, tempor in pharetra non, vehicula faucibus odio. Praesent sodales
        maximus varius. Etiam at lorem dictum, venenatis neque ut, consequat
        felis. Quisque laoreet diam et eros consectetur ultricies. Ut a mi
        fringilla, feugiat nisi a, auctor ligula. Maecenas vitae luctus ipsum.
        Maecenas non nisl non lacus bibendum mollis. Nullam quis commodo eros.
        Donec maximus ornare felis id tristique. Curabitur eu sapien eget dolor
        venenatis dapibus quis ac dui. Proin sed augue ultricies, cursus justo
        a, posuere elit. Generated 5 paragraphs, 398 words, 2647 bytes of Lorem
        Ipsum
      </p>
    </div>
  );
}
