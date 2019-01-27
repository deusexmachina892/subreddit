import React, { PureComponent } from 'react';
import noImage from '../no-image.png';

export default class PostList extends PureComponent {
  render() {
    const { posts, subreddit } = this.props;
    return (
      <section className='postlist'>
         {subreddit?<h1>Showing Posts for r/{subreddit}</h1>:<h1>No posts to show yet</h1>}
         {posts.length>0 && posts.map(({ data : { id, title, author, created_utc, ups, score, downs, num_comments, selftext_html, media, url, thumbnail, thumbnail_height, thumbnail_width } }) => {
             const height = thumbnail_height?`${thumbnail_height}px`: '140px';
             const width = thumbnail_width?`${thumbnail_width}px`: '140px';
             return(
                 <article className='post' key={id}>
                   <main>
                     <figure>
                         <img src={thumbnail && thumbnail !== 'self'?thumbnail:noImage} alt='test' style={{height, width}}/>
                     </figure>
                    <section>
                      <h1><a href={url} target='_blank' rel='noopener noreferrer'>{title}</a></h1>
                      <h4>By {author}</h4>
                    </section>
                    <aside>{new Date(created_utc).toLocaleDateString()}</aside>
                  </main>
                  <footer>
                    <ul>
                      <li className='blue'>Score: {score}</li>
                      <li className='green'>Ups: {ups}</li>
                      <li className='red'>Downs: {downs}</li>
                      <li>Comments: {num_comments}</li>
                    </ul>
                    <aside className='subreddit'>{subreddit}</aside>
                  </footer>
                  {posts.map(post=>console.log(post.data))}
                 </article>
             );
         })}
      </section>
    )
  }
}
