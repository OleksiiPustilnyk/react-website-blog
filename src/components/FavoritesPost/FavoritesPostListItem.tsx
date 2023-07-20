import { Post } from 'utils/postsArray'

type Props = { post: Post; postCount: number }

const FavoritesPostListItem = ({ post, postCount }: Props) => {
    return (
        <div>
            {post.title}: {postCount}
        </div>
    )
}
export default FavoritesPostListItem

// import { Product } from 'utils/productsArray'

// type Props = { product: Product; productCount: number }

// const CartProductListItem = ({ product, productCount }: Props) => {
//     return (
//         <div>
//             {product.title}: {productCount}
//         </div>
//     )
// }
// export default CartProductListItem
