export function formatDate(date: string | Date, includeRelative = false) {
  // Convertir la date en objet Date si ce n'est pas déjà le cas
  const targetDate = date instanceof Date ? date : new Date(date);

  // Vérifier si la date est valide
  if (isNaN(targetDate.getTime())) {
    return 'Date invalide';
  }

  const currentDate = new Date();
  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = Math.floor(
    (currentDate.getTime() - targetDate.getTime()) / (1000 * 3600 * 24),
  );

  let formattedDate = '';

  if (includeRelative) {
    if (yearsAgo > 0) {
      formattedDate = `il y a ${yearsAgo} an${yearsAgo > 1 ? 's' : ''}`;
    } else if (monthsAgo > 0) {
      formattedDate = `il y a ${monthsAgo} mois`;
    } else if (daysAgo > 0) {
      formattedDate = `il y a ${daysAgo} jour${daysAgo > 1 ? 's' : ''}`;
    } else {
      formattedDate = "Aujourd'hui";
    }
  }

  const fullDate = targetDate.toLocaleString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return includeRelative ? `${formattedDate} (${fullDate})` : fullDate;
}
