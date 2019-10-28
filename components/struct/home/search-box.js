import React from 'react'
import {Text} from 'components/ui'
import colors from 'utils/theme/colors'
import fonts from 'utils/theme/fonts'

function SearchBox({handleSearch}) {
    return (
        <>
            <div className="box-full">
                <div className="">
                    <Text variant="heading">Encontre aqui o que seu bebê precisa.</Text>
                </div>
                <div className="">
                    <input type="search" placeholder="Digite o que está buscando" onChange={(e) => handleSearch(e.target.value)} />
                </div>
            </div>
            <style jsx>{`
                .box-full {
                    background-color: ${colors.lightContrast};
                    padding: 50px;
                    margin-bottom: 30px;
                }
                input {
                    font-size: 14px;
                    font-weight: 300;
                    height: auto;
                    border-radius: 5px;
                    width: 70%;
                    border: 0px;
                    padding: 20px;
                    box-shadow: 0 32px 32px 0 rgba(51,51,51,.05);
                    margin: 0 auto;
                    display: block;
                }
            `}</style>
        </>
    )
}

export default SearchBox