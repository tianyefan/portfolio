import React from 'react'
import PortfolioList from '../portfolioList/PortfolioList';
import "./portfolio.scss"
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio
} from '../../data';
import { LinkTwoTone } from '@material-ui/icons';
import Link from '@material-ui/core/Link';

export default function Portfolio() {

    const [selected, setSelected] = React.useState("featured");
    const [data, setData] = React.useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web",
        },
        {
            id: "mobile",
            title: "Mobile",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content",
        },
    ];

    React.useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected])

    return (
        <div className='portfolio' id='portfolio'>
            <div className='left'>
                <h1>Projects</h1>
                <div className='container'>
                    {data.map((d) => (
                        <>
                            <div className='item' >
                                <img
                                    src={d.img}
                                    alt=''
                                />
                                <h3>{d.title}</h3>
                                <Link href={d.url} target="_blank">
                                    <LinkTwoTone className='icon'/>
                                </Link>
                                
                            </div>
                        </>
                    ))}
                </div>
            </div>

            <div className='right'>
                <ul>
                    {list.map(item => (
                        <PortfolioList
                            title={item.title}
                            active={selected === item.id}
                            setSelected={setSelected}
                            id={item.id}
                        />
                    ))}
                </ul>
            </div>



        </div>
    )
}
