import KanbanCard from '@/components/KanbanCard';
import KanbanContainer from '@/container/KanbanContainer';
import { kanbanData } from '@/lib/data';

export const Kanban = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <KanbanContainer title="Backlog">
        {kanbanData['backlog'].map((info, index) => (
          <KanbanCard
            key={index}
            title={info.title}
            image={info.image}
            desc={info.description}
            status={
              info.status.toUpperCase() as
                | 'UPDATE'
                | 'DONE'
                | 'PENDING'
                | 'ERROR'
            }
          ></KanbanCard>
        ))}
      </KanbanContainer>
      <KanbanContainer title="In Progress">
        {kanbanData['inProgress'].map((info, index) => (
          <KanbanCard
            key={index}
            title={info.title}
            image={info.image}
            desc={info.description}
            status={
              info.status.toUpperCase() as
                | 'UPDATE'
                | 'DONE'
                | 'PENDING'
                | 'ERROR'
            }
          ></KanbanCard>
        ))}
      </KanbanContainer>
      <KanbanContainer title="Done">
        {kanbanData['done'].map((info, index) => (
          <KanbanCard
            key={index}
            title={info.title}
            desc={info.description}
            status={
              info.status.toUpperCase() as
                | 'UPDATE'
                | 'DONE'
                | 'PENDING'
                | 'ERROR'
            }
          ></KanbanCard>
        ))}
      </KanbanContainer>
    </div>
  );
};
