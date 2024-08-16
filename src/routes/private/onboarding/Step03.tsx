import { Onboarding } from "@/components/layout/private/onboardingLayout/components/OnboardingCard";
import { Button, Stack, Text, Title } from "@/components/ui";
import { cn } from "@/lib/utils";
import { PathConstants as path } from "@/PathConstants";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HourSelector = ({ name }: { name: string }) => {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <Stack align="center">
      <AnimatePresence>
        <Button
          variant={selected ? "default" : "ghost"}
          onClick={() => setSelected(!selected)}
        >
          {selected && (
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: 20 }}
              transition={{
                transform: { type: "spring", stiffness: 400, damping: 20 },
              }}
            >
              <Check size={15} />
            </motion.div>
          )}
          <span className={cn(selected && "ml-2 transition-[margin]")}>
            {name}
          </span>
        </Button>
      </AnimatePresence>
    </Stack>
  );
};

const Step03 = () => {
  const navigate = useNavigate();

  const nextPath = path.ONBOARDING + "/" + path.STEP4;
  const backPath = path.ONBOARDING + "/" + path.STEP2;

  const addHours = () => {
    navigate(nextPath, { state: nextPath });
  };

  const goBack = () => {
    navigate(backPath, { state: backPath });
  };

  return (
    <Onboarding.Card>
      <Onboarding.Content className="flex flex-col space-y-10">
        <Stack>
          <Title order={1}>When are you open?</Title>
          <Text>
            Almost done! Let's set your business hours so customers know when
            you're open.
          </Text>
        </Stack>
        <div className="grid grid-cols-7">
          <HourSelector name="Monday" />
          <HourSelector name="Tuesday" />
          <HourSelector name="Wednesday" />
          <HourSelector name="Thursday" />
          <HourSelector name="Friday" />
          <HourSelector name="Saturday" />
          <HourSelector name="Sunday" />
        </div>
      </Onboarding.Content>
      <Onboarding.Footer>
        <Button variant="ghost" onClick={goBack}>
          Previous
        </Button>
        <Button onClick={addHours}>Continue</Button>
      </Onboarding.Footer>
    </Onboarding.Card>
  );
};

export default Step03;
