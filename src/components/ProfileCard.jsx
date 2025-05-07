function ProfileCard({image, name, jobTitle, bio, skills}) {
    return (
        <div className="flex flex-col items-center gap-4 bg-neutral-200 shadow-lg rounded-lg p-4 m-4 w-[300px]">
            <img className="mb-2 w-[100px] h-auto" src={image} alt={`${name}'s profile`} />
            <h2 className="text-2xl">{name}</h2>
            <h3 className="text-xl">{jobTitle}</h3>
            <p>{skills}</p>
            <p className="text-center">{bio}</p>
        </div>
    );
}

export default ProfileCard;