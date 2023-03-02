import Carousel from "react-bootstrap/Carousel";
import {HStack, Stack,Image, Text, Heading, useDisclosure} from "@chakra-ui/react"
import styles from '../Styles/Navbar.module.css'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import HomeCarousel from "./Curousel/HomeCarousel";
import HomeCarousel1 from "./Curousel/HomeCarousel1";
import HomeCarousel2 from "./Curousel/HomeCarousel2";
import { Nav } from "./Nav";
import SidebarContent from "./SidebarContent";

export const LandingPage = () => {

  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Navbar/> 
      <div className={styles.container}>
        <SidebarContent/>
        <div className={styles.barcode}>
          
          <div className={styles.bartext}>
            <p>Enjoy Convenient Order Tracking</p>
            <h3>Scan to download app</h3>
          </div>
        </div>
        
        <div className={styles.rightside}>
          {/* Slider starts here */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://n4.sdlcdn.com/imgs/k/a/z/Tshirt_WEB_10dec-dce51.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://n2.sdlcdn.com/imgs/k/a/z/Dresess_WEB_10dec-89750.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://n3.sdlcdn.com/imgs/k/a/z/Footwear_Collection_WEB_10dec-fea6a.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://n4.sdlcdn.com/imgs/k/a/z/Tshirt_WEB_10dec-dce51.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://n4.sdlcdn.com/imgs/j/t/8/Web1min-cbb30.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          {/* <!-- ---cardslider-- --> */}
          <div className={styles.Container}>
            <h2 style={{letterSpacing:"2px",marginTop:"25px",border:"1px solid gray",padding:"5px"}}>RECENTLY VIEWED PRODUCTS</h2>
            <Link to={'/product'}>
            <HomeCarousel/>
            </Link>
           
            <Link to={'/product'}>
            <HomeCarousel1/>
            </Link>

            <h2 style={{letterSpacing:"2px",marginTop:"25px",border:"1px solid gray",padding:"5px"}}>POPULAR PRODUCTS</h2>
            
            <Link to={'/product'}>
            <HomeCarousel2/>
            </Link>

          </div>          
        </div>
      </div>
     
      <div className={styles.downloadsnap}>
        <img src="https://i1.sdlcdn.com/img/appScreenshot@1x.png" alt="" />
        <div className={styles.snapText}>
          <h5>Download Snapdeal App Now</h5>
          <p>Fast, Simple & Delightful.</p>
          <h4>All it takes is 30 seconds to Download.</h4>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAuCAYAAADHo8eUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMToxMjoxNSAxMjozNTo1NEDSUKQAAB7gSURBVHhe7Z0HvM7VH8e/d5DQoGxdFWWnQikju6yEuPZIsoqQEhmVjDJbEqmISAoN2YmikIaVyCar/iLZ5/99f+/ze3qe63Kn4vZ8Xq9zn984v3PO75zvPuf8roQQQgghhBBCCCGEEEIIIYiU0zRT0y5NLpRSRWIsGVPG9lwIjX3qS2cd+zDfrx/h4eG99PKzenjGvRAuPjjG3+lfTT5w0FvTc3YWDB17CY196sUZYx800OnSpSt7yskiPQwRQCrD6VOn5NSpkyYMONVUXtNiTnwoqyk09qkfQWMfzh8Pyvzd9SdEAKkQ4REREhEZ6TuzcWesAxEa+/8GgsY+SAAoSvh+Q0iFCA+PUBb383hx36+H0Nj/d+Af+yCJn+aSdH5HMYTUiVMnTsjp06d8Z0HjHxr7/xZs7GNbACmGU+pznj6Nu5E0ELQ6dep0ssqIC5R38qT6wklEcp+PjZQuL4QQEoMUFwAw/oljR+Xqq6+WK664IjD6nGDwTHh4uOTMkV2uvPJKOXH8uJxQzZVcUO7ll18u1113XZLbxTtdd+21SXreA8/yTjB/ctoTQgjJRYoKgBMnjksWZfznXxgi3yxbKrXvrSUnjx/z3U0YYIpLL71U3psyWYYNGyojhg2Td96ZILfdVtLKBwgDGAimIT9CBwQe8+slNCz5acudd9whQ1543t+uwLI8xHXNytFnypQuLYMHDzpDa8d+xquba/x64H5ERISULVdOnJripW6/3d+e2HXyPlzj90LF9ddfL1WqVJHKlStLxowZfVdDuFiQYgLglDJEnqg88vFHH0n3x7pJnjx5ZMfOnYFBpwQjbdq0cs0110iPHk9K23Zt5aOPPpaXRr4oObLnMCFQonhxqVipkqRJk8YsBOpimovj7Nmz2XG2bNlMs+bOnVvy33ijlC9fXsIjIo3BsC4AjIlgqVChgkRGRhqjUeYdKiS4xjH5YcKoqCipWLGiXHXVVXLa/c2Q3D+jHD3Po/mzZ89ujJEjRw6/wOBeiRLF5dWXX5KyZcuZsMP7vjF/fildpozlsTpVoFBXJX3PTJkyXXBuApbQwIED5dFHH5Vbb71VmjdvLqNGjbL3Twkwpm+88Ya89dZbMmHCBOnatWuKCZhOnTrJXXfd5TtLHJ588knJly+f7yzxyJIli/UX6N27txQuXNiO/y2kiACAYNFqI4YPN+IGK1aulGVLl0lEZBo7TyyOK9Md0/TX0WMyZfK7snPXTilVqpQKl8ek55M95P569WTcG2OliHbgsCFDrA2Pdu6s2vQFFUYnpK92bnSD+jJt6nvy0ENtpGPHDtK//7PGSO40QiBCBg54TrooATdu1EjGvD5amTGd5M2bV+rcd59ERzeQkSOG68udltu13jeVGKtVry4PtGolYU6FmtaHrg7Tv4HlvD76NUmfIb0MHjRQXn7xRalW7R6ZOGG85MqVywQFzxS/tbi5SNSTIUMGuemmm6R5s2bSu1cvK+ekvnfBggVk0MABeq+ovPzSiyYQAy2JfxvNtL3r1q0zZho8eLA89dRTJiSLFSsmo0ePlu7duxtNJBUI8Pu0fz788EN57733tB+rmYDxQF1Zs2a1Y9yodOnS+Y8R3ACFcNlll5lCof8RpKC6jmPBggXtOHPmzHKtunSBoFyURyCoj7Jr1qxpAj0Q6dOnN7rxhB+CijbwDPV7oD9q164tr776qrWFYwQd6ZJLLvHlEisf5fFPIEkCAE0JIxkzoQH1t0jRolKrVk27/9tvvylhdJZDfxy0+6SkIEytBxI4cOCA3HLLzUYIDzzYRjq0b2eavFChgspUTooqE+VVc5SOvanYzZIjZw755pvl9nwvJc5HtD0V1AqAsI6puX1jgQKqgctIay2rTZsHJWuWrKbhf/zhe5kzZ4788stmO8+WLbvVNendd034jH79dYlMowOt5Z5ULV24SNHgcpR4yt9V3jT7OxMnSjfVXL/u2SNVq1SW0yqYaM+0Dz6QjRs3So+evWSP3tu2fZsxUI+ePeW+2vdKhBJPu7ZtjaB++eUXbVsWFXh17fkLBZj+K1assOOSJUvKyJEjbYwY+/79+6siKOFnsqQAmqE8xuIjtSoffPBB09rUO0zdwldeeUWmTJkiDzzwgDRt2tSEEAw2f/58qVu3rtyoVt+YMWOksyoFnsdaWbBggWnfQ4cOyZ9//mkMOH36dBkxYoSMHz/exuyRRx4xgUP+13WsEdDU9eabb8rzzz9vFuWxY3+7tberC/fpp59a/ZSVM2dO6dOnj7z//vt2jfbQFoCwaaRKAmHRsmVLOXjwoNXH+9BGrKoOHTqYAMX64fh8I1ECwHzSY0etUzCDGAwkF75sTpVadOqcuXPlbmXS1WtWK5MVNOkWrkR/IqDTEgIIACsAor9CmfqGG26QPb/uMaHzPyUysG/ffm2Tk2XLlknbhx6SjZs2yqLPF6kl0Em103rZtXu3HDp8WAdMrQmtH4sCbcB7IKWP/nVUjhw+ZGX99vtvEqkuApqrfv37ZfGSJfK71gMTknfPnl8tH8Tj98m1jZddFlwObbs0/aVmwu/bvz/m2v/+59dQgDIRBE6tC4QY98Fh7T/KhpARSPRneiXKsePGyXwl3qRaU+cDvN/Ro0ftmBgABLtmzRp7r+3bt8vSpUv9/USfJwWU5T2LYKHvW7RoIaVLl9Yxqi9tVUgyXnv37lUX7DZLKIDi6iJWrVpVtm7dav3OczAc7UP7QwtYYDAqgreeWpNoXawa2g6jv6sCv1y5cqbxceOor5daaLw37QKM3YABA0wQ3X///VZft27dzMzfvHmzNG7cWA4r/eF+gn379pn2//HHH2W4WsvwEYKiQYMGpphoBxbV2LFjTSDRPiy/84kECwBe/HI1Z3r2ekq+XLJYvl/1rXz/3SpZvOhzeVI11x9//CG1at8nQ4cOk5Y6SN+tWmV5vvt2pXz6ycdyT/VqJgQSag1gvlVW//f++g1kgnbGksVLZJxKYYRCv6f7SSuV/EWLFrGYw6JFX0gDZdr5CxbKZ7NnqxatLQsWLtABCjOpzoAxWBADzJUxQ0b5af06M8e7qlZv3aaNDcBXX30lRYoUMcmcT6V01qzZTNPPmzdf2rdrpxZOLTXVm0raNEqU+h6srIOoAsvJqqYbbQ00RdOpkAw0h//66y9Jp+2qocSIieiZfxG+NlL2h9M/NBPygBL+77/9Ltu2bbe2XCjgfbyxhKG2bNkiX375pdEJGm/Xrl1G2BD4N998I1OnTpU6deqYlksoKP/IkSN2jALwTOydO3ea8NmwYYPloW4ExMMPP2xuAuY+2n3atGk27jAjwghBS34S7aA8xg/Xav369ZI/f36z+kgoN2gNgYKAoXwskl9//dU/lvwSp1mltA6+//57Y1jqwsKjHmgpENCiJxj5xcKj/t9//92sR2gGK4P28S604XwiyElTgu7nOwzCSdXCUdfk1sGcKq1atvA3NK0mJCeBqgbqb9+rDIImvt0nielgiJvOjFZiOKUvjLY+rR3jSdG4QIdERIT7/KoINa1myFtvvy0n9frceXOVwPJbGwYOGhwz+Np563QAv/pqqezZu0fW//STLFYmhNE2aQdv2rTJBmObSvfvvvvO8m74aYMKiYVSTF2HTCpsBg1+XrZv2yYrVn5rcYVDhw7L+x9Mk00bN5lgUGdE3ZwiMkMFzucqcCBCiAsCjV3ONtUEe/fuk7XqI3N///4DsnbtOiWi341ojqhm37FjhwqbwrJELY3Vq9fIVq2b9/tFiZXEtf1qQZRXsxctSFm8z7n6LSFwOgb0hQ9P+35BnGN/NjA2MBaCE4IlAIqmQwP26NHDTF3OCxUqZP4sv9HR0cZkaMz4QJkdO3a0Y8pB+05Ul4qAIGY9zEiMgLJfeOEFExAIgIeU/mrUqKHKoag88cQTJrSh1VmzZplrgFVF2TArygH3hf5t3bq1vK00Rp3UQT+j1Tm+++67jSZvueUWK3+cWmSMPwxMrADBBqMTqMRVILDH2EE3rVq1MmGwfPlyexfiDbgsX3/9tbVt0aJFRp+80wfqGuI2rVy50saa+hBi5yn2Y2MfRE1xrQSEWNIoI0//8AMzq5KD1Sptq1a9W5l0r1+Kng24Gn6EhUsanylIZ3i+cJia7AgZ2sg0WmTaGE3qHXP91InjvJc/D884LSONCqa4ygq8BgLLjIF2mRKH1x4QVzlYO/jyCAlmEcL0l+seuEaAMbA9Xhtpr+XRMjSTHUeo1UFZyUVSVwJiriLICxQoIDfffLMxGMdovED3Jj7AFJjw8QETHQvCs+C+/fZb8+EBJn7Dhg1NuOLnI0xhLGIEMDGzOCggfHOvLqwTTHoEAL445jraHIbHZMcHX6iCHBonzrR69WqzQmFGLAAExDYV0jD2vHnzLHYDPOGBYKMOLB1cIu7/8MMPVhbPYWkA3EniGbgauLOUT/sRNosXL7b3Rcjwzgian3/+2Z47D7Cxj1cAwIgNGzeRdye+47uSNCBxa9epa50RyAgXE2BQkFwt/G8iKQIAoiWYRYQ/MFqdFEDkMGII/zps7ONVKWHhEdIwuoHvLGk4qpqsc5eusnXzL4lmfjQlQsiSEu+/AeqlfgQAzB/TnsQFNS9mYK15Ad+4gIbED8ac/eSTT2T27Nl+PzeECxvntAAYRKT/8q+XmY+VVCxR06hCxYp69Pe0XkLANFuNmjWl+j332DnTZ5iBkWpa/1NAAGHyNmnSxKYhMfnw6VicNFPNRsxyvwugwtIL/F2oSIoFQECKIJk3N00ch3N8V96XPmBRiwdmfgjQeRH8QIQsgAsG8VsAaDwEAP5fckCkk8UtiWF+6o6IjJCuXR6V9u3bWWJ6jyI8U/x8A+a/995asnDBfHmsW1cpU7qM3HrLLdKqZUubKjx96qQxPzMGT/bsJR3at7eVfqkZ9D1z7wS3mO8nMEcfBOJCF4Ih/I14XQACFbEHOLFgpVRiQZ15r88rt5UsaXED5lDLlCkr1153fVB7PBeBdnqmupcCzVC7z3XN4z/2pbjezxN+zzz9tAWDhgwdJoUKF5aixW6W6jVqyoiRI1UYhZvmJ0o84Ln+UrFCBVuFaAE+Hyg7sC5SoADz2mxt8r1LYLtjvxP5/m3QJg8I9dhtIoKdXFBuQhUGFgjTrgQmE6NkANYI7s0/BdpJ4DQx06HnE+ecBqQzGewmjRsna2kic97vTJxkhJHQSDbR+yZNmpoGHv36GDl29KgUK3aTrF27VlYu/8bm4NG2rMSqUrWqHPzjD4nSju3QoaM0athIsmbLZqa6rdpShitcpIhND8GQLN5p1669NGveTAXKdbL5l822WCRwZoJ8lMdUEtfbd+xgawf+d/CgbFTzdueu3dYGVhfee++9tibh8OFDcvzESblCBQZTgTAG7SDC26ZNG6lUuYoKwwyyRe/Z/K62q2SJElJVBQjzwLgarK3HYiLajDC5Sd+5desHTePmL1DQItf7VRjGN4tyNiRlGpAoP1NsCESAhmelH9NzLJJhDDD7OQ+8FtdYI8yZKosPrI9gRR5RcubgAdNikyZNsoi9J2RoF/P2rEN59tln7ZnExB9YhUdZBKnPJ+gz3CT2EjAzwEwAMxvMFjCVyIxGXIroPCJw7GNADCB2UjHg3h4/Xmkmeejb72mozkWkSXtGHXGliMg0bu7cefZsxUqVXceHH7bjGTNnOvW1LQ/l9ez1lF2fM3euUyKwYw+ffjrLXXFlJsvXtFlzu7ZkyRK3e9duO/awfPlylyv3NS5c6/Tqj0x7iUufMaNbsWKF5flq6VeucpUqLl36DP73IP/8+fPtfiDefXey5Sldtpz76aef7NrBgwedMr0d817URx51HezaBx986L9f9Z5qdu/BNg/ZO3F969atdm/79u3u9lJ3ujBfHyQ2hetzlO1LgQi8HpRUW7ndu2P6TJnL3Xfffa5QoUKW6tSp41599VX/Oemee+7xv0tsfPHFF3HWEVeaNWuW69ixo/9chbGVQfnetQULFrimTZvasQpF//WEJhUorkmTJnHeS8nUsmVLt2zZMpc7d26nAtUp07tMmTJZ3y5cuNCpwIvzufOYzkRcBKOXXfMWLa3jk4Pjx0+4Pn37GkPCXHHV5SWIu4AS0uHDh92WLVtcxsuvcHlvuNHOVVO66/Lmc2ERkda2Ll27+WpwbtCgwe7G/AVco8ZN3N69++xal65dLV+9+vXtHLzxxjin5rxTU95t2rTJrqlJ79TiCWqHqjBXvkIFYzoPy77+2rXQwUyj74AQULPTjRr1mt2bP3+BCatCRYq6K/U9f1y92q6/Nnq0y54jp9ZZxKlGs2tjxo7VdoW5R7t0tXPwySefujYPtXU5c+VyNxW72d5XrQFXsFBhE4gtWrayfLPnzHVptX3x9WNcKSUEQN68ef33YPg+ffoE5Ye41fKy/LGRGAHQvn17N2PGDDtWa8JNnz7dzVQFoFrbruXIkcOtWbPGqXXq8uXL5zp37mzXVcMaw3Xr1s1NmzbNqVXlFw5qxbi+SodqKbgePXpon3/iGjVqZPcyZ87s+vXr56ZMmeLGjRvnSpcubde7dOnif2e1dJxqcRcZGUN/zZo1c2q5uVw6ZkOHDnVTp051PXv2tPZy30uPPfaYmz17dtC1DBkyuJFKd2oFuLFKD9WrV7fr6lJa/bSRstSFtusIW+obPHiwU4vSrvHM22+/7carklZLyF92AtKZiJNglPByqrbyCCC5mDx5ihJu2nMSrzbFPaKDCT7UQafzCyqhrVgRwzxt27Xzv4gnAL74YrFZBpb0em8lSjB7zhw79wTAhg0bTKDAfFxv2eoBuw6zps942RntIl/efDe4YcOHu82bN1te8PwLQ1y4Twg90immrZ7mJ1VT4QJ2qbWRPWcuK4frderW813f5TJcdrnr1PlRO//hxx+tfu95hCXA4mHg6zeIdq0fbGOWhLohLndUVJDFktCUXAEAYDR1AYwZ7rjjDte/f/+g/OrjpogAYNxX67io32wMPm/ePHfnnXeaFcd9+sVjqqpVqzo1qe2Y9tBemIP869evd7Vr17Z76n4Ys8G0DRs2dAcOHHB169Y1AYEwGDRokCtWrJhTt82tW7fOFShQwPLDwDyvLodTt9jlz5/fnvnyyy9dwYIF3ccff+y6qrIpUqSIq6KWopr8lt9LWbJksfbT3gqqVLiGEKlZs6YJsVq1all/0uZVq1Y5daOcujxu4sSJbsyYMZYfYbFjxw4XHR1t7cISoj9Llizp1PUy5UK7Aus9RzLE65Dja+7asd12w6UEWMrL9N7ZgjVKI7aCrob6SYB1/fjya9eskeLFY/ZRs8479sYYlmaq8+ePQP/ww4/2yyqvQPz66x6LC6gQUp4MtyW61HlV5sz2LMeBYIUeS3O7dukiJUqWlAEDBpqv9nDHDv693N7aBvN5tUxQIH9++929e5f5p1ZfeISoS2BxlUxaH8FRr7512o4jhw8jhK0Mr+yaNWrYElE+kDJ2zOvmh0fqmETq+8du6z8Fds+xtJVl1SxVVU1t03tsYmE5rBKmL2fywFJjlvwSGylTpoxtP2YKkv5mM1rZsmX9qwPx+73NSYD1CKwEZOUhx2qp2OpCYhe0kbZPnjzZlmIzbixyYnk5y5iJB7CH4bPPPrMNPcx0UL+XjzgDddMGYjeMKWOBL0+8Yu7cuUGBUkAQmxgUbWHn5GuvvWbvwaYplhGzhoLViewAJC7BakPWVrC0mrqJiUB3PM9SaqZh2QxFjITAInxKLIN4SGKQoIgcH9J4+ZVX/MsfkwrWzE+cOEki2UxzFrC1OF++G0Qltw3o8BEj5Zlnn5Wnn35G2HFGR99xeynJE2sPd8yc898M4TF+7M0Y5INYjHfcacl8VSYTRgQBCdoFCiayEHkncKbaVg7s3y+9+/a1gWLJZq5cOS2f94wFn3wfCzlwIGYnIDMICBa7d/qUERkDf0iFAu8XJAi9Y20chAUm62CXKnWHVKhU2ZK6GLbbEoJi0P8J0Ma4lvvybuwFYWktRMqSWDWDbRttXGsAEgv6jOW57MhjmS+MxTUYg/X3fEeBFYpxgSW/HmBGxta2gqvwD7zHMTRFkNvblekBeucZ1u3zriwrJu+LL75oewjY/8A92sTUKOPJ9wvYt2DKIBaom2cJlDJjAQPzLP3rKS6EFMuEPdA+2s5UPHUjED1AS/Q/S49JCDNvi3ZCkSABQLR786ZN0qdfovaLBAGC7t798TOJPhbYWkxkHYnHWuquKgH79ukj/fr1lUe7dlPm2yZXZrpSqlSu7HsiBuzJL3VnaTlx/JhE5bnWNiUBT0OwmQcQra9evZrNMlx1dRbp9Mgjdp3tv38d+TOobeyBUJ/cPkTCdudcua9RIn/A9nwzMJu3bLV8J3z7AKKirpErMmWWSy5Nr+V9aZuUmGJq0ayZTRdm1Hfigx/UwWYlvpcQF6HQ1Dlz5tohhHZEJfvnC+ZbWq4D/O23q+Ltx5QEdbE9FsaLzSTnG2g8BAAaHG0J2NiDsEEAsrXWg9cf/Ab2K8cIXaxEpt+8aT+Yiu8DwFis1Wd6LnC2i3FnJyMRerQ8W4dheJgMwcDmIqwEgEBmazIzPqzlj/2REXYNepYiVgJWBpuS0OqssPRmANiDELjnBouD+imf5wOFPvsEeH+sFi95m46ShEBfMXbCNyYQpZaA9lfiQES4WfMWpnPjKttL1EFwC78G9H/uuaBndGgtgAcWLfrChYWH+4No+Jx/HjnidMDc3r177Rq+VLbsOayM++s3sGvkIxH537Ztm10jwp5f/TgCi15dHN9YoKDdB/iKBCA9EGMgWKnmuqtQsZIFx8COnTvNf6fO9h06+KPhvNPatWvtmDhEIfUVyfP4Ez3s2vTpM6wsrx8uzZDBTZr0rt1TDeBWqH+3dOkyt0t92779+gX1S2JSUmIAXlLiM/8eH7ZTp07mT9Pf9E1CoQwUZ9lnS8oc5osTzPOuKTNZncOHD/dfq1SpklM3xI6feeYZp26K/97AgQMtcMexamfzlQmkqTa2svH3uff444/bOHHvnXfecRMmTHBq6dm9evXqOWVcC3By/tJLLxl94eurwLHzIUOGuFGjRjkVlhbgI5+XVNvbjAUzJgTsVJhZAFWFk8UFCDwSO4iKilLaXmR+P+3gnbzgIO80YMAAf5k8z7uQl9gFsQq1VPz340mGIBUCgfgO4wTmCtt0+/TurT5wR5OmmM5fqWRmTz5z12jHu1WCFS9R3LYLM+/LKrlJ6kfhT58LlI8/00/NbL49MFR9Ieb9sUAAy1jvVDOstZpbB1V7PqESr13bdjJi+DCZMWOmLF221D6qgLZf+PlCNbdesk+JsduO7wpMfW+KaRHM6obR0WbGK1PJyJdeVAm/wW+GAaVV0xB8Aqx8+bsk6poo+xYg7Zk8eYp9d8A0jqYwvd6yZStp0riRtf+10a/LGDWDlTLsmwZ8H4FPe7FWYeGChfLGm+Nkq1oPfK+gStW7pWGDBqbZ8Qv976pt5jsCbKGtp5rm2mvzmCn788aN8vb48TJL/dukfCAkpf8vABoJbchScbQ0c/WYt2wXjh1/QYvhHqBJEwO+L4B/G2ga890GTHTKBPQ73wEgToBmRetDewDNTn/yjQKAe8m6BWiBceajHZ5pTfuJv7BDT4WB0SQgXoPlgIYGvDN1erv1aA/amnJwWzD3A8HzWBtYBlgA7Bz03FP6CbeAuATlUS7nuF3EPLz34PsQtIe2ecBlwD2CFllXwBqSBMLGPlECANAA/HRWxV1//XVW4fr1P/m3w4J06TPIzdoZma/KbMG4Hdu2xgS3EgAGxNt6G6YETsArECe0bm2A70yki7oFw4YOkSlT3pOGDaPN/KYzjmLO+57Hj/cEwBI1zQngEJSD4f/CH1RiCWR+D/62hEf4A3aWX3lFtXSMALB8bBc+au+Imcbge6aat2lINbr5crTF2zIMLFhkDKl+YCwB+Xf9kVr/pdb3vBdBwsDtyIlBSguAuADzQdQIAYQBCcE5c+bMIOIN4V9F0gSABz/hKnNAzB4zACNc7qtmJHgW6LekJGCmbo91t89qT5v2gTJ5ff9GocD2kK9Bg2gVEpPVh/tGyql0RSOQJzDf2cD7eDhXfi9fXHnOdS8+JLT+hOCfEAAhXBSwsU9QEDAuoDHRePzGJkrO0VDcP1/MD6gHc2qDmk18gpxzLwWC8z/UVSHf5i1b/Ndi5zsbvLzx5T9XnoQ8fzZ4zyb1+RBCOBuCKCoxFsCFAsxNEuax56/FBZgHYYQ29SKu/0WELIAQfLCxv+gFAEioeZ0cMzy1ICQAQvDBxj62CxATJr3IkFDzOKH5UjMC/qtR7LG+KMc+hCTBP9axBcBK328IqRCm+f8OKMYe69DY/3fgH+sgARARJi/oT8gUTIXg2wlM3/rAGDPWgQiN/X8DQWN/hj0cHh7eSy8/q4f/bVs5lcD+g6Fq/YCpRA74gN9zdhYMHXsJjX3qxbnGPgh8tXGmJnwFHgqliz8xloxpfF/kDI196ksJHfsQQgghhBBCCCGEEEIIITVD5P8TOvhf7xsJWQAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
        <img
          className={styles.leaves}
          src="https://i1.sdlcdn.com/img/leaves1x.png"
          alt=""
        />
      </div>
      <Footer/>
    </div>
  );
};
