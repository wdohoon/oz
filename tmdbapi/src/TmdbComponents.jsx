import React, {useEffect, useState} from 'react';
import axios from "axios";

// TMDB 랑 통신을 하기위한 필요한 설정
const APIKEY = "c6b4175a32a7a522d8a8b4e4590a2577"
const API_BASE_URL = "https://api.themoviedb.org/3/movie"
const IMG_BASE_URL = "https://image.tmdb.org"
const MOVIE_ID = "912649"

// UI component(VAC 패턴)
const MovieList = ({ movieList }) => (
    <>
        <h1>영화 리스트 조회</h1>
        {movieList.map((movie, idx) => (
            <div key={movie.id}>
                <h2>{`No.${++idx} ID: ${movie.id}, Adult: ${
                    movie.adult === false ? "19세 미만" : "19세 이상"
                }`}</h2>
            </div>
        ))}
    </>
);

// 영화 상세 조회
const MovieDetail = ({ movie }) => (
    <>
        <h1>영화 상세 조회</h1>
        <h2>
            제목 : {movie.title}({movie.original_title})
        </h2>
        <h2>개요 : {movie.overview}</h2>
        <h2>출시일 : {movie.release_date}</h2>
        <h2>19세 여부 : {movie.adult === false ? "19세 미만" : "19세 이상"}</h2>
    </>
);

// 영화 이미지 component
const MovieImage = ({movieImages}) => (
    <>
        <h1>영화 이미지 조회</h1>
        {movieImages?.map((movie, idx) => (
            <div key={idx}>
                <h2>No. : {++idx}</h2>
                <img
                    src={`${IMG_BASE_URL}/t/p/w500${movie.file_path}`}
                    alt={movie.file_path}
                />
            </div>
        ))}
    </>
)

// state 관리 component
const TmdbComponents = () => {
    // 영화 리스트 상태 관리
    const [movieList, setMovieList] = useState([])
    const [movieDetail, setMovieDetail] = useState([])
    const [movieImage, setMovieImage] = useState([])

    // 1.영화 리스트 조회
    const getMovieList = async () => {
        const url = API_BASE_URL + "/changes"

        await axios
            .get(url, {
                params: {
                    api_key: APIKEY,
                }
            })
            .then( res => {
                console.log("getMovieList = ", res)
                setMovieList(res.data.results)
            })
            .catch(err => console.log(err))
    }

    //영화 상세 조회
    const getMovieDetail = async () => {
        const url = API_BASE_URL + "/" + MOVIE_ID;

        await axios
            .get(url, {
                params: {
                    api_key: APIKEY,
                },
            })
            .then((res) => {
                console.log("movie Detail res: ", res);
                setMovieDetail({...res.data})
            })
            .catch((err) => {
                console.error(err);
            });
    };

    // 3. 이미지 조회
    const getMovieImage = async () => {
        const url = API_BASE_URL + "/" + MOVIE_ID + "/images"

        await axios
            .get(url, {
                params: {
                    api_key: APIKEY,
                },
            })
            .then((res) => {
                console.log("movie Image res: ", res);
                setMovieImage((prev) => (res.data.backdrops));
            })
            .catch((err) => {
                console.error(err);
            });
    }

    useEffect(() => {
        getMovieList()
        getMovieDetail()
        getMovieImage()
    }, []);

    return (
        <div>
            {/*<MovieList movieList={movieList}/>*/}
            {/*<MovieDetail movie={movieDetail}/>*/}
            <MovieImage movieImages={movieImage}/>
        </div>
    );
};

export default TmdbComponents;