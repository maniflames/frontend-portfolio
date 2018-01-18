export function formChange(projectId, newField) {
    return {
        type: 'CHANGE_FORM',
        payload: {
            id: projectId,
            field: newField, 
        },
    }
}
