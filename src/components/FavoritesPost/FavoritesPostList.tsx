import postsArray, { Post, getPostsObject } from 'utils/postsArray'
import FavoritesPostListItem from './FavoritesPostListItem'

type Props = {
    postInFavorite: {
        [id: number]: number
    }
    postsObject?: {
        [id: number]: Post
    }
    FavoriteItem?: any
}

const FavoritesPostList = ({
    postInFavorite,
    postsObject = getPostsObject(postsArray),
    FavoriteItem = FavoritesPostListItem,
}: Props) => {
    return (
        <>
            {Object.keys(postInFavorite).map((postId) => (
                <FavoriteItem
                    key={postId}
                    post={postsObject[parseInt(postId)]}
                    postCount={postInFavorite[parseInt(postId)]}
                />
            ))}
        </>
    )
}
export default FavoritesPostList

// import productsArray, { Product, getProductsObject } from 'utils/productsArray'
// import CartProductListItem from './CartProductListItem'

// type Props = {
//     productsInCart: {
//         [id: number]: number
//     }
//     productsObject?: {
//         [id: number]: Product
//     }
//     CartItem?: any
// }
// const CartProductList = ({
//     productsInCart,
//     productsObject = getProductsObject(productsArray),
//     CartItem = CartProductListItem,
// }: Props) => {
//     return (
//         <>
//             {Object.keys(productsInCart).map((productId) => (
//                 <CartItem
//                     key={productId}
//                     product={productsObject[parseInt(productId)]}
//                     productCount={productsInCart[parseInt(productId)]}
//                 />
//             ))}
//         </>
//     )
// }
// export default CartProductList
