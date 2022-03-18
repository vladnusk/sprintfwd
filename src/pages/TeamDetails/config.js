export const TEAM_DETAILS = [
    {
        title: 'Team members',
        id: 'name', 
        render: (content) => {
            return `${content.first_name} ${content.last_name}`;
          },
    }
]