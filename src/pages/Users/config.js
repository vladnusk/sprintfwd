export const MEMBERS_CONFIG = [
    {
      id: 'name',
      title: 'Member name',
      render: (content) => {
        return `${content.first_name} ${content.last_name}`
      }
    },
    {
      id: 'team',
      title: 'Team',
      render: (content) => {
        return (<a href={`teams/${content.team.id}`}>{content.team.name}</a>)
      }
    }
    ]