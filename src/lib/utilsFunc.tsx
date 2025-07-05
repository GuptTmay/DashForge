import { AlertCircle, CheckCircle, XCircle } from "lucide-react";
type Status = (typeof Status)[keyof typeof Status];

export const Status = {
  APPROVED: 'Approved',
  DISABLE: 'Disable',
  ERROR: 'Error',
} as const;


export const KanbanStatus = {
  UPDATE: 'Update',
  DONE: 'Done',
  PENDING: 'Pending',
  ERROR: 'Error',
} as const;



export function returnStatus(stat: Status) {
  switch (stat) {
    case Status.APPROVED:
      return (
        <div className="flex items-center gap-2">
          <CheckCircle className="text-green-500" />
          <p>{Status.APPROVED}</p>
        </div>
      );
    case Status.DISABLE:
      return (
        <div className="flex items-center gap-2">
          <AlertCircle className="text-yellow-500" />
          <p>{Status.DISABLE}</p>
        </div>
      );
    case Status.ERROR:
      return (
        <div className="flex items-center gap-2">
          <XCircle className="text-red-500" />
          <p>{Status.ERROR}</p>
        </div>
      );
    default:
      return null;
  }
}

