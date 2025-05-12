interface ProfileFooterProps {
  username: string;
}

export function ProfileFooter({ username }: ProfileFooterProps) {
  return (
    <footer className="row-start-3 flex flex-col gap-2 items-center justify-center text-xs text-gray-400 mt-12 sm:mt-16">
      <p>
        &copy; 2025 {username}. All Rights Reserved.
      </p>
    </footer>
  );
}
