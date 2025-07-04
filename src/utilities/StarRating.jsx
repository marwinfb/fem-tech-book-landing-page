function StarRating({rating = 0, size = 24, imageSrc}) {
  const fullStars = Math.floor(rating);

  const stars = Array.from({ length: fullStars }, (_, i) => (
    <img key={i} src={imageSrc} alt="star" style={{ width: size, height: size}}/>
  ));
  
  return (
    <div style={{ display: 'flex' }}>{stars}</div>
  )
}
export default StarRating