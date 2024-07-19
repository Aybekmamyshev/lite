import React, {useContext, useState} from 'react';

import styles from './hero.module.scss'
import {Link} from "react-router-dom";



import Container from "../../components/Component";
import useCategory from "../../hooks/useCategory";
import {CustomContext} from "../../context";




interface ITypeCharacter {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: string[],
    url: string,
    created: string
}

const Hero = () => {
    const category = useContext(CustomContext)
    const [next, setNext] = useState(1)
    const {data, loading, error} = useCategory(category?.category, next)
    return (
        <Container>
            <>
                <h2 className={styles.title}> All heroes</h2>
                <button onClick={() => setNext(prevState => prevState + 1)}>next page</button>

                <div className={styles.wrapper}>
                    {error && <p>Ошибка</p>}
                    {data && !loading &&
                        data?.map((item: ITypeCharacter) => (
                            <Link className={styles.link} to={`${item.id}`}>
                                <div key={item.id} className={styles.card}>
                                    <div>
                                        <img src={item.image} alt=""/>
                                    </div>
                                    <h2>{item.name}</h2>

                                </div>
                            </Link>
                        ))
                    }
                </div>

            </>
        </Container>
    );
};

export default Hero;