import styles from '@styles/components/BlogPostCard.module.scss';

function BlogPostCard({
   imgUri,
   category,
   title,
   author,
}: {
   imgUri: string;
   category: string;
   title: string;
   author: string;
}) {
   return (
      <div className={styles.container}>
         <div className={styles.image}></div>
         <div className={styles.infos}>
            <div className={styles.category}>{category}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.author}>By {author}</div>
         </div>
      </div>
   );
}

export default BlogPostCard;
