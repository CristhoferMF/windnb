import styled from 'styled-components'
import StarIcon from '@material-ui/icons/Star';
import {colors, screens} from '../../config/theme'

export const StayCardContainer = styled.div `

`

export const ImageStayCard = styled.img `
    border-radius: 24px;
    object-fit: cover;
    width: 100%;
    height: 220px;
`

export const InfoRow = styled.div `
    display: flex;
    padding:15px 0px;
    justify-content: space-between;
`

export const TypeRow = styled.div `
    display: flex;
    gap:10px;
    align-items: center;
`
export const SuperHost = styled.div `
    border: 1px solid #4F4F4F;
    border-radius: 12px;
    color: #4F4F4F;
    padding: 5px 10px;
    min-width: max-content;

    &::after{
        content: 'SUPER HOST';
        font-weight: bold;
        font-size: 12px;
    }
`

export const Type = styled.div `
    font-size: 14px;
    font-weight: 500;
    color: #828282;
`

export const RatingWrapper = styled.div `
    display: flex;
    gap:5px;
    color: #4F4F4F;
    font-weight: 500;
    align-items: center;
`

export const StarIconCSS = styled(StarIcon)`
    color: ${colors.primary};
`

export const Title = styled.div`
    font-size: 16px;
    font-weight: bold;
    line-height: 20px;
`